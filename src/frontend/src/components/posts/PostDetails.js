import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPostDetails, setPostDetails, setIsOnDetailsPage } from '../../actions/posts';
import { setLanguage } from '../../actions/global';
import { Link } from "react-router-dom";

class PostDetails extends Component {

    static propTypes = {
        posts: PropTypes.array.isRequired,
        postDetails: PropTypes.object,
        isLoading: PropTypes.bool.isRequired,
        lang: PropTypes.string
    }

    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps){
        if (this.props.lang != prevProps.lang){
            let id = this.props.match.params.id;
            this.props.history.push(`/${this.props.lang}/post/${id}`);
            this.props.getPostDetails(id);
        }
    }

    componentDidMount(){
        this.props.setIsOnDetailsPage(true);

        this.props.setLanguage(this.props.match.params.lang);

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
    lang: state.global.language,
})
  
export default connect(mapStateToProps, { 
    getPostDetails, setPostDetails, setLanguage, setIsOnDetailsPage
})(PostDetails);
