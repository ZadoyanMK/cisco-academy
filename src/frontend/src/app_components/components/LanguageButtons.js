import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { setLanguage } from '../../actions/global'
import IconButton from '@material-ui/core/IconButton';

export class LanguageButtons extends Component {
    render() {
      return (
        <Fragment>
        <IconButton size="small" className="ml-auto" aria-label="English" onClick={() => this.props.setLanguage("en")} >
          <span className="flag-icon flag-icon-us"></span>
        </IconButton>
        <IconButton size="small" aria-label="Ukrainian" onClick={() => this.props.setLanguage("ua")}>
          <span className="flag-icon flag-icon-ua"></span>
        </IconButton>
        </Fragment>
      )
    }
}

const mapToStateProps = state => ({
})

export default connect(mapToStateProps, { setLanguage })(LanguageButtons);