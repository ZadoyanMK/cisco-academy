import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core/Typography';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer-container">
        <Typography variant="subheading" color="inherit">
            <p>&copy; 2019-{new Date().getFullYear()} ZNTU, Inc. &middot; <a href="#">Facebook</a> &middot; <a href="#">Twitter</a></p>
        </Typography>
        </footer>
      </Fragment>
    )
  }
}
