import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { setMessage } from '../../actions/global';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object,
    message: PropTypes.string
  };

  componentDidUpdate(prevProps){
    if (this.props.message != prevProps.message && this.props.message != ""){
      this.props.alert.success(this.props.message);
      this.props.setMessage("");
    }

    if (this.props.error != prevProps.error){
      console.log(this.props.error.message);
      console.log(this.props.error.status);
    }
  }
  render() {
    return (
      <Fragment />
    )
  }
}

const mapToStayProps = state => ({
  error: state.err_message,
  message: state.success_message.message
})

export default connect(mapToStayProps, {setMessage})(withAlert(Alerts));
