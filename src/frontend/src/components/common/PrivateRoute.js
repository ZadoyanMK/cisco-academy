import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoadng } from '../../actions/posts';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, posts, isLoadng, ...rest}) => (
     <Route 
        {...rest}
        render={props => {
            
            if (posts.isLoading){
                return <h2>Loading...</h2>
            } else {
            return <Component {...props} />;
            }
        }}
    />
);

const mapToStateProps = state => ({
    posts: state.posts
})

export default  connect(mapToStateProps, { isLoadng })(PrivateRoute);