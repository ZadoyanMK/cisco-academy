import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
import LanguageButtons from '../components/LanguageButtons';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer-container">
        <Typography variant="subheading" color="inherit">
            <p className="mb-0"> 
              &copy; {new Date().getFullYear()} ZNTU, Inc. &middot; <a href="#">Facebook</a> &middot; <a href="#">Twitter</a>
            </p>
            <div className="lang-buttons-container">
              <LanguageButtons />
            </div>
        </Typography>
        </footer>
      </Fragment>
    )
  }
}
