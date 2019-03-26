import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <LinearProgress className="mt-0 pt-0" color="primary"/>
      </div>
    )
  }
}
