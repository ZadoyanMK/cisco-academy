import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    BrowserRouter,
    Route,
    Switch,
  } from "react-router-dom";
import Header from './layout/Header'
import Posts from './posts/Posts'
import PostDetails from './posts/PostDetails'
import PrivateRoute from './common/PrivateRoute'
import { Provider } from 'react-redux';
import store from '../store';

import Error404 from './errors/Eror404';

// const supportsHistory = 'pushState' in window.history

class App extends Component{
    render(){
        return (
            <Provider store={store}>
            <BrowserRouter>
            <Fragment>
                <Header />
                    <div className="container">
                    <Switch>
                        <PrivateRoute exact path="/" component={Posts} />
                        <PrivateRoute exact path="/post/:id/" component={PostDetails} />
                        <Route component={Error404} />
                    </Switch>
                    </div>
            </Fragment>
            </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
