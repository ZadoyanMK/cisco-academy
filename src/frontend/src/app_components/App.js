import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";

import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from "react-alert-template-basic";

import Header from './layout/Header'
import Alerts from './components/Alerts'
import Posts from './pages/Posts'
import SendMessage from './components/SendMessage';
import PostDetails from './pages/PostDetails'
import Courses from './pages/Courses';
import Error404 from './pages/Eror404';

import PrivateRoute from './common/PrivateRoute'
import { Provider } from 'react-redux';
import store from '../store';

const alertOptions = {
    timeout: 3000,
    position: "top center"
};

class App extends Component{
    render(){
        return (
            <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <BrowserRouter>
                <Fragment>
                    <Header />
                    <Alerts />
                    <div className="container">
                        <Switch>
                            {/* <Route exact path="/404/"component={Error404} /> */}
                            <Route exact path="/:lang/" component={Posts} />
                            <Route exact path="/:lang/post/:id/" component={PostDetails} />
                            <Route exact path="/:lang/courses/" component={Courses} />
                            <Route component={Error404}/>
                        </Switch>
                    </div>
                    <SendMessage />
                </Fragment>
                </BrowserRouter>

            </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));