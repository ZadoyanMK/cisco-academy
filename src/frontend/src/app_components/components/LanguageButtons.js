import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { setLanguage } from '../../actions/global'

export class LanguageButtons extends Component {
    render() {
      return (
        <Fragment>
        <input type="button" value="en" className="navbar-link ml-auto" onClick={() => this.props.setLanguage("en")} />

        <input type="button" value="ru" className="navbar-link ml-1" onClick={() => this.props.setLanguage("ru")} />

        </Fragment>
      )
    }
}

const mapToStateProps = state => ({
})

export default connect(mapToStateProps, { setLanguage })(LanguageButtons);