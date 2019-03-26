// import React, { Component } from 'react'

// export default class PostCard extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.postData.name}
//       </div>
//     )
//   }
// }
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: '100%',
    marginBottom: 10,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  constructor(props){
      super(props);

      this.displayImage = this.displayImage.bind(this);
  }

  handleExpandClick = () => {
      
    this.setState(state => ({ expanded: !state.expanded }));
  };

  displayImage() {
    if (this.props.postData.main_image != null){
        return (<CardMedia
            className="main-image"
            image={this.props.postData.main_image}
            title={this.props.postData.name}
        />)
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.props.postData.name}
          subheader={this.props.postData.created_at}
        />

        {this.displayImage()}

        <CardContent>
          <Typography component="div">
            <div dangerouslySetInnerHTML={{__html: this.props.postData.preview}} />
          </Typography>
        </CardContent>
        
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <div className="card-content"
              dangerouslySetInnerHTML={{__html: this.props.postData.description}} 
              />
          </CardContent>
        </Collapse>

        <CardActions className="card-actions" disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);