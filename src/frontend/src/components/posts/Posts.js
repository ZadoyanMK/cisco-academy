import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../../actions/posts';
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

class Posts extends Component {

  static propTypes = {
    posts: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    itemsCountPerPage: PropTypes.number,
    totalItemsCount: PropTypes.number,
  }

  constructor(props){
    super(props);

    this.state = {
      activePage: 1,
    };

    
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  
  componentDidMount(){
    console.log(this.props)
    this.props.getPosts(1);
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.props.history.push(`/?page=${pageNumber}`);
    this.props.getPosts(pageNumber);
  }

  render() {
    if (this.props.isLoading){
      return <h1>Loading...</h1>
    }
    return (
      <Fragment>
        <h1>Posts page</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            { this.props.posts.map(post => (
              <tr key={post.id}>
                <td>
                <Link to={"/post/" + post.id}> {post.name} </Link>
                </td>
                <td dangerouslySetInnerHTML={{__html: post.description}} />
              </tr>
            )) }
          </tbody>
        </table>
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
  isLoading: state.posts.isLoading
})

export default connect(mapStateToProps, { 
  getPosts
})(Posts);
