import React, { Component } from 'react'
import { sendMessage } from '../../actions/global';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Fab from '@material-ui/core/Fab';
import Email from '@material-ui/icons/Email';
import PropTypes from 'prop-types';

class SendMessage extends Component {
  static propTypes = {
    lang: PropTypes.string.isRequired
  }
  constructor(props){
    super(props);

    this.state = {
        title: '',
        description: '',
        open: false,

        'en':{
          titleText: 'Send your feedback!',
          titleField: 'Title',
          descriptionField: 'Description',
          helpMessage: 'Fields marked with * are required!',
          cancelButton: 'Cancel',
          sendButton: 'Send'
        },
        'ua': {
          titleText: 'Надішліть нам листа!',
          titleField: 'Заголовок',
          descriptionField: 'Текст повідомлення',
          helpMessage: 'Поля позначені * необхідно заповнити!',
          cancelButton: 'Відмінити',
          sendButton: 'Надіслати'
        }
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
      <div>
        <div className="open-mess-modal">
        <Fab aria-label="Send Mail" onClick={this.handleClickOpen} color="secondary">
          <Email fontSize="large"/>
        </Fab>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" className="modal-title">
            {this.state[this.props.lang].titleText}
          </DialogTitle>
          <form onSubmit={this.handleSubmit} className="form-main">
            <DialogContent>
              <TextField
                autoFocus
                value={this.state.title}
                margin="dense"
                id="title"
                label={this.state[this.props.lang].titleField}
                type="text"
                fullWidth
                required
                onChange={this.handleChangeTitle}
              />
              <TextField
                value={this.state.description}
                margin="dense"
                id="description"
                label={this.state[this.props.lang].descriptionField}
                type="text"
                fullWidth
                multiline
                required
                onChange={this.handleChangeDescription}
              />
              <DialogContentText>
                {this.state[this.props.lang].helpMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" >
                {this.state[this.props.lang].cancelButton}
              </Button>
              <Button type="submit" color="secondary">
                {this.state[this.props.lang].sendButton}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    )
    }
}

const mapStateToProps = state => ({
  lang: state.global.language
})

export default connect(mapStateToProps, {sendMessage})(SendMessage);