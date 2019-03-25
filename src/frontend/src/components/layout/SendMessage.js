import React, { Component, Fragment } from 'react'
import { sendMessage } from '../../actions/global';
// import axios from 'axios';
import { connect } from 'react-redux';

class SendMessage extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: ''
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      this.props.sendMessage(this.state.title, this.state.description);
      this.setState({
        title: "",
        description: "",
      });
      event.preventDefault();
    }
    
    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }
    handleChangeDescription(event) {
      this.setState({description: event.target.value});
    }
    
    render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            Title:
            <input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
            Description:
            <input type="text" value={this.state.description} onChange={this.handleChangeDescription} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
    }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {sendMessage})(SendMessage);