import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';

class CoursesCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            btnText:{
                'en': 'Learn more',
                'ua': 'Більше...'
            },
            open: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
    }

    handleClick(e){
        this.setState({ open: true });
    }

    handleClose(){
        this.setState({ open: false });
    }

  render() {
    return (
        <React.Fragment>
        <Card className="courses-card">
        <CardActionArea onClick={this.handleClick}>
            <CardMedia
            className="courses-media"
            image={this.props.courseData.main_image}
            title={this.props.courseData.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {this.props.courseData.name}
            </Typography>
            <Typography 
                className="card-content"
                dangerouslySetInnerHTML={{__html: this.props.courseData.preview}} 
            />
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" className="ml-auto" onClick={this.handleClick}>
                {this.state.btnText[this.props.lang]}
            </Button>
        </CardActions>
        </Card>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          className="dialog-view"
        >
          <DialogTitle id="form-dialog-title" className="modal-title form-dialog-main-course">
        
            {this.props.courseData.name}
          <IconButton 
          size="medium" 
          aria-label="Close" 
          onClick={this.handleClose} 
          color="inherit"
          className="curse-close-button">

            <Clear />
          </IconButton>
          </DialogTitle>
          
            <DialogContent className="course-card-content">
            <Typography 
                className="card-content"
                variant="subheading"
                dangerouslySetInnerHTML={{__html: this.props.courseData.description}} 
            />
            </DialogContent>
          
        </Dialog>
        </React.Fragment>
    );
  }
}

export default CoursesCard;