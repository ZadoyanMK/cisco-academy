import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPostDetails, isLoadng, setPostDetails, setPageNotFound } from '../../actions/posts';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

export class PostDetails extends Component {

    static propTypes = {
        posts: PropTypes.array.isRequired,
        postDetails: PropTypes.object,
    }

    constructor(props){
        super(props);
        this.props.isLoadng(false);
        this.props.setPageNotFound(false);
    }

    componentDidMount(){
        if (!this.props.isFetched) {
            this.props.isLoadng(true);

            let id = this.props.match.params.id;
            let postF = this.props.posts.filter(post => {
                return post.id == id
            });
            if (postF.length != 0){
                this.props.setPostDetails(postF[0])
            }
            else {
                this.props.getPostDetails(id);
            }
        }
    }

    render() {
        if (this.props.errorReceived){
            return <Redirect to="/error404/" />
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
    isFetched: state.posts.isFetched,
    errorReceived: state.posts.notFoundPage
})
  
export default connect(mapStateToProps, { 
    getPostDetails, isLoadng, setPostDetails, setPageNotFound
})(PostDetails);
