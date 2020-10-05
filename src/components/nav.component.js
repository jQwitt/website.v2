import React from 'react';
import PageLink from './page-link.component';
import SocialMedia from './social-media.component';
import IconChange from './icon-change.component';
import '../styles/partials/_navigation.scss';
import '../styles/flaticon.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.toggleContainer = this.toggleContainer.bind(this);
  }

  toggleContainer() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const { expanded } = this.state;
    return (
      <div className="col-xl-3 col-lg-4 col-12 py-lg-3 row navigation position-fixed">
        <div className="col-md-12 align-self-start">
          <h1 className="underlined padded">website.v2</h1>
          <div
            className={`navigation-links${!expanded ? ' hidden-mobile' : ''}`}
            data-testid="containerPageLinks"
          >
            <PageLink nameToLink="experience" />
            <PageLink nameToLink="projects" />
            <PageLink nameToLink="education" />
            <PageLink nameToLink="contact" />
          </div>
        </div>
        <div
          className={`col-12 align-self-end bottom-right-mobile${
            !expanded ? ' hidden-mobile' : ''
          }`}
          data-testid="containerSocialLinks"
        >
          <SocialMedia justifyContent="center" />
        </div>
        <div
          className="top-right-mobile hidden-desktop"
          onClick={this.toggleContainer}
          data-testid="togglesContainer"
        >
          <IconChange />
        </div>
      </div>
    );
  }
}

export default Navigation;
