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
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { connect } from 'react-redux';

const styles = theme => ({
  card: {
    maxWidth: '100%',
    marginBottom: 10,
  },
  expand: {
    position: 'relative',
    left: '48%',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  media: {
    height: 320,
    // paddingTop: '56.25%'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    position: 'relative',
    left: '48%',
  },
});

class PostCard extends React.Component {
  state = { expanded: false };

  constructor(props){
      super(props);

      this.displayImage = this.displayImage.bind(this);
      this.getFormatDate = this.getFormatDate.bind(this);
  }
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  displayImage() {
    const { classes } = this.props;
    if (this.props.postData.main_image != null){
        return (<CardMedia
            className={classes.media}
            image={this.props.postData.main_image}
            title={this.props.postData.name}
        />)
    }
  }

  getFormatDate(){
    let d = new Date(this.props.postData.created_at);
    let l = this.props.lang == 'ua' ? 'uk-UA' :  'en-US';
    return d.toLocaleDateString(
        l,
        { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    );
  }
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.props.postData.name}
          subheader={this.getFormatDate()}
        />

        {this.displayImage()}

        <CardContent>
          <Typography component="div">
            <div className="card-content"
            dangerouslySetInnerHTML={{__html: this.props.postData.preview}} />
          </Typography>
        </CardContent>
        
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography component="div">
              <div className="card-content"
              dangerouslySetInnerHTML={{__html: this.props.postData.description}} 
              />
              </Typography>
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

          <Typography className="creator-div">
              {this.props.postData.creator_name}
          </Typography>
        </CardActions>
      </Card>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
};

const mapToStateProps = state => ({
    lang: state.global.language
})

export default connect(mapToStateProps, {})(withStyles(styles)(PostCard));