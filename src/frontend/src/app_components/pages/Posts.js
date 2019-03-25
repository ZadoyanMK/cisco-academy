import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts, setIsOnDetailsPage } from '../../actions/posts';
import { setLanguage } from '../../actions/global';
import Loading from '../components/Loading';
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

class Posts extends Component {

  static propTypes = {
    posts: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    itemsCountPerPage: PropTypes.number,
    totalItemsCount: PropTypes.number,
    lang: PropTypes.string
  }

  constructor(props){
    super(props);

    this.state = {
      activePage: 1,
    };

    this.props.setLanguage(this.props.match.params.lang);

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidUpdate(prevProps){
    if (this.props.lang != prevProps.lang){
      this.props.history.push(`/${this.props.lang}/?page=${this.state.activePage}`);
      this.props.getPosts(this.state.activePage);
    }
  }

  componentDidMount(){
    this.props.setIsOnDetailsPage(false);
    var urlParams = new URLSearchParams(window.location.search);
    let page = urlParams.get('page');
    this.props.getPosts(page);
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.props.history.push(`/${this.props.lang}/?page=${pageNumber}`);
    this.props.getPosts(pageNumber);
  }

  render() {
    if (this.props.isLoading){
      return <Loading />
    }
    return (
      <Fragment>
        <h1>Posts page</h1>
        

            { this.props.posts.map(post => (
              <div key={post.id}>
                <p>
                <Link to={`post/${post.id}`}> {post.name} </Link>
                </p>
                <div dangerouslySetInnerHTML={{__html: post.description}} />
              </div>
            )) }

        
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.props.itemsCountPerPage}
          totalItemsCount={this.props.totalItemsCount}
          
          onChange={this.handlePageChange}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  itemsCountPerPage: state.posts.pagination.per_page,
  totalItemsCount: state.posts.pagination.total_count,
  isLoading: state.posts.isLoading,
  lang: state.global.language
})

export default connect(mapStateToProps, { 
  getPosts, setLanguage, setIsOnDetailsPage
})(Posts);
