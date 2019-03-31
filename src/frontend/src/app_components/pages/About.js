import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class About extends Component {
    static propTypes = {
        lang: PropTypes.string.isRequired
    }
    constructor(props){
        super(props);

        this.state = {
            'en': {

            },
            'ua': {

            }
        }
    }
  render() {
    return (
      <Fragment>
        <div className="about-container">
            <h1>About page</h1>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    lang: state.global.language
});

export default connect(mapStateToProps, {})(About);