import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLanguage } from '../../actions/global'


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      'en':{
        courses: 'Courses'
      },
      'ua': {
        courses: 'Курси'
      } 
    }
  }
  render() {
    return (
      <Fragment>
        <AppBar position="fixed" className="app-toolbar mb-2">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              <Link className="navbar-brand header-link header-main-link" to={"/" + this.props.lang + "/"} >
                Cisco-academy 
              </Link>
              </Typography>
            <Typography variant="subheading" color="inherit" className="pt-1">
              <Link className="navbar-link header-link mr-1" to={"/" + this.props.lang + "/courses/"} >
                { this.state[this.props.lang].courses }
              </Link>
            </Typography>
            {/* {(() => {
              if (!this.props.isOnPage){
                
              }
            })()}            */}
          </Toolbar>
        </AppBar>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.global.language,
  isOnPage: state.posts.isOnPage
});

export default connect(mapStateToProps, { setLanguage })(Header);
