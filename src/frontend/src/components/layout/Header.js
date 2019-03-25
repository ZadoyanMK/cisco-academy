import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLanguage } from '../../actions/global'
import LanguageButtons from '../common/LanguageButtons';

export class Header extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <Fragment>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to={"/" + this.props.lang + "/"} >
              Cisco-academy 
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-link" to={"/" + this.props.lang + "/courses/"} >
              Courses list
            </Link>
            {(() => {
              if (!this.props.isOnPage){
                return <LanguageButtons />
              }
            })()}
            
          </div>
        </div>
      </nav>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.global.language,
  isOnPage: state.posts.isOnPage
});

export default connect(mapStateToProps, { setLanguage })(Header);
