import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPostDetails, setPostDetails } from '../../actions/posts';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class PostDetails extends Component {

    static propTypes = {
        posts: PropTypes.array.isRequired,
        postDetails: PropTypes.object,
        isLoading: PropTypes.bool.isRequired,
        isNotFound: PropTypes.bool.isRequired,
    }

    constructor(props){
        super(props);
    }

    componentDidMount(){      
        let id = this.props.match.params.id;
        let posts = this.props.posts.filter(post => {
            return post.id == id
        });
        if (posts.length != 0){
            this.props.setPostDetails(posts[0])
        }
        else {
            this.props.getPostDetails(id);
        }
    }

    render() {
        if (this.props.isNotFound){
            return <Redirect to="/404/" />
        }
        if (this.props.isLoading){
            return <h1>Loading...</h1>
        }
        return (
        <Fragment>
            <Link to="/">Home</Link>
            <p>
                {this.props.postDetails.name}
            </p>
        </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    postDetails: state.posts.postDetails,
    isLoading: state.posts.isLoading,
    isNotFound: state.posts.notFoundPage
})
  
export default connect(mapStateToProps, { 
    getPostDetails, setPostDetails
})(PostDetails);
