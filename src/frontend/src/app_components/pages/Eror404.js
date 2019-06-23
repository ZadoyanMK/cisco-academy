import React, { Component } from 'react'
import {connect} from 'react-redux';
import { setNotFound } from '../../actions/global';

export class Eror404 extends Component {
  componentDidMount(){
    this.props.setNotFound(false);
    console.log('on 404')
  }
  render() {
    return (
      <div>
        <h1>404 Error</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {setNotFound})(Eror404);