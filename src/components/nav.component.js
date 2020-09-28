import React from 'react';
import { SocialMedia, IconChange } from './index';
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
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { expanded } = this.state;
    return (
      <div className="col-xl-3 col-lg-4 col-12 py-lg-3 row navigation position-fixed">
        <div className="col-md-12 align-self-start">
          <h1 className="underlined padded">website.v2</h1>
          <div
            className={'navigation-links' + (!expanded ? ' hidden-mobile' : '')}
            data-testid="containerPageLinks"
          >
            <h3 id="experience">experience</h3>
            <h3 id="projects">projects</h3>
            <h3 id="education">education</h3>
            <h3 id="contact">contact</h3>
          </div>
        </div>
        <div
          className={
            'col-12 align-self-end bottom-right-mobile' +
            (!expanded ? ' hidden-mobile' : '')
          }
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
