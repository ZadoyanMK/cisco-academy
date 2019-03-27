import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses } from '../../actions/courses';
import { setIsOnDetailsPage } from '../../actions/posts';
import { setLanguage } from '../../actions/global';
import Loading from '../components/Loading';
import CoursesCard from '../components/courses/CoursesCard';

class Courses extends Component {

  static propTypes = {
    courses: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    lang: PropTypes.string.isRequired
  }

  constructor(props){
    super(props);
  }

  componentDidMount(){
      this.props.setIsOnDetailsPage(false);
      this.props.setLanguage(this.props.match.params.lang);
      this.props.getCourses();
  }

  componentDidUpdate(prevProps){
    if (this.props.lang != prevProps.lang){
      this.props.history.push(`/${this.props.lang}/courses/`);
      this.props.getCourses();
    }
  }

  render() {
    if (this.props.isLoading){
        return <Loading />
    }
    if (this.props.courses.length == 0){
        return <div className="coming-soon-block"></div>
    }
    return (
      <Fragment>
        <div className="courses-container">
        { this.props.courses.map(course => {
          if (!course.hidden){
            return (
              <CoursesCard key={course.id} courseData={course} lang={this.props.lang}/>
            )
          }
        }) }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    courses: state.courses.courses,
    isLoading: state.courses.isLoading,
    lang: state.global.language
});

export default connect(mapStateToProps, { 
  getCourses, setIsOnDetailsPage, setLanguage
})(Courses);