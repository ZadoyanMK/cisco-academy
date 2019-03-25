import React, { Component, Fragment } from 'react'
import { sendMessage } from '../../actions/global';
// import axios from 'axios';
import { connect } from 'react-redux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Email                                                                                                                                                                                                                                                                                                                                                                                                     from '@material-ui/icons/Email';

class SendMessage extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            open: false
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClickOpen = () => {
      this.setState({ open: true });                              
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    handleSubmit(event) {
      this.props.sendMessage(this.state.title, this.state.description);
      this.setState({
        title: "",
        description: "",
      });
      this.handleClose();
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
      // <div>
      //   <form onSubmit={this.handleSubmit} className="form-main">
      //       Title:
      //       <input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
      //       Description:
      //       <CKEditor
      //               toolbar={[ 'heading', '|', 'bold', 'italic' ]}
      //               editor={ ClassicEditor }
      //               data="<p>Hello from CKEditor 5!</p>"
      //               onInit={ editor => {
      //                   // You can store the "editor" and use when it is needed.
      //                   console.log( 'Editor is ready to use!', editor );
      //               } }
      //               onChange={ ( event, editor ) => {
      //                   const data = editor.getData();
      //                   console.log( { event, editor, data } );
      //               } }
      //           />
      //     <input type="submit" value="Submit"/>
      //   </form>
      // </div>
      <div>
        <div className="open-mess-modal">

        <IconButton aria-label="Send Mail" onClick={this.handleClickOpen} color="secondary">
          <Email fontSize="large"/>
        </IconButton>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" className="modal-title">Send your feedback!</DialogTitle>
          <form onSubmit={this.handleSubmit} className="form-main">
            <DialogContent>
              <TextField
                autoFocus
                value={this.state.title}
                margin="dense"
                id="title"
                label="Title"
                type="text"
                fullWidth
                required
                onChange={this.handleChangeTitle}
              />
              <TextField
                autoFocus
                value={this.state.description}
                margin="dense"
                id="description"
                label="Description"
                type="text"
                fullWidth
                multiline
                required
                onChange={this.handleChangeDescription}
              />
              <DialogContentText>
                Fields marked with * are required!.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} className="submit-button" >
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Send
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    )
    }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {sendMessage})(SendMessage);