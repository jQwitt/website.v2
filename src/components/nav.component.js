import React from 'react';
import { SocialMedia, IconChange } from './index';
import '../styles/partials/_navigation.scss';
import '../styles/flaticon.css';

const Navigation = (props) => {
  return (
    <div className="col-xl-3 col-lg-4 col-12 py-lg-3 row navigation position-fixed">
      <div className="col-md-12 align-self-start">
        <h1 className="underlined padded">website.v2</h1>
        <div className="navigation-links">
          <h3 id="experience">experience</h3>
          <h3 id="projects">projects</h3>
          <h3 id="education">education</h3>
          <h3 id="contact">contact</h3>
        </div>
      </div>
      <div className="col-12 align-self-end bottom-right-mobile">
        <SocialMedia justifyContent="center" />
      </div>
      <IconChange className="top-right-mobile hidden-desktop" />
    </div>
  );
};

export default Navigation;
