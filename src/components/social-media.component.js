import React from 'react';
import '../styles/partials/_social-links.scss';
import '../styles/partials/_flaticon.scss';

const SocialMedia = (props) => {
  return (
    <div className="social-media-links d-flex justify-content-center">
      <a href="https://www.linkedin.com/in/joseph-witt-52a960171/">
        <i className="flaticon-linkedin medium"></i>
      </a>
      <a href="mailto:jackwittbiz@gmail.com">
        <i className="flaticon-email medium"></i>
      </a>
      <a href="https://github.com/jQwitt">
        <i className="flaticon-browser medium"></i>
      </a>
    </div>
  );
};

export default SocialMedia;
