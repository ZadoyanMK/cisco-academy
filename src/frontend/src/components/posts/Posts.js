import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts, isLoadng, setPageNotFound } from '../../actions/posts';
import { Link } from "react-router-dom";
import axios from 'axios';

export class Posts extends Component {

  static propTypes = {
    posts: PropTypes.array.isRequired
  }

  constructor(props){
    super(props);
    this.props.isLoadng(false);
    this.state = {
      title: '',
      description: ''
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);

    axios.post('/send-message/', {
      title: this.state.title,
      description: this.state.description
    }, 
    {
      "Content-Type": "application/json"
    })
    .then((res) => {
      console.log(res);
    });
    event.preventDefault();
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }
  
  componentDidMount(){
    if (!this.props.isFetched) {
      this.props.isLoadng(true);
      this.props.setPageNotFound(false);
      this.props.getPosts();
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Posts page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
          </label>
          <label>
            Description:
            <input type="text" value={this.state.description} onChange={this.handleChangeDescription} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                Name of penis
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
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  isFetched: state.posts.isFetched
})

export default connect(mapStateToProps, { 
  getPosts, isLoadng, setPageNotFound
})(Posts);
