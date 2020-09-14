import React from 'react';
import '../styles/partials/_social-links.scss';
import '../styles/partials/_flaticon.scss';

const SocialMedia = (props) => {
  const { justifyContent = 'center' } = props;
  return (
    <div
      className={'social-media-links d-flex justify-content-' + justifyContent}
    >
      <a href="https://www.linkedin.com/in/joseph-witt-52a960171/">
        <i className="flaticon-linkedin medium" />
      </a>
      <a href="mailto:jackwittbiz@gmail.com">
        <i className="flaticon-email medium" />
      </a>
      <a href="https://github.com/jQwitt">
        <i className="flaticon-browser medium" />
      </a>
    </div>
  );
};

export default SocialMedia;
