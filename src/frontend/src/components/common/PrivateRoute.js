import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, global, ...rest}) => (
     <Route 
        {...rest}
        render={props => {
            
            if (global.notFound){
                return <Redirect to='/404/' />
            } else {
                return <Component {...props} />;
            }
        }}
    />
);

const mapToStateProps = state => ({
    global: state.global
})

export default  connect(mapToStateProps)(PrivateRoute);