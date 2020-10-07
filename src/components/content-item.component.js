import React from 'react';
import '../styles/partials/_content-item.scss';
import '../styles/flaticon.css';

const ContentItem = (props) => {
  const {
    title, subTitle, description, dateRange, misc
  } = props;
  return (
    <div className="container-fluid content-item">
      <div className="row justify-content-start">
        {title || subTitle ? (
          <div className="col-auto">
            {title ? <h4>{title}</h4> : null}
            {subTitle ? <h6>{subTitle}</h6> : null}
          </div>
        ) : null}
      </div>
      <div className="row">
        {description ? (
          <div className="col-xl-9 col-lg-9 col-md-9 col-12 mb-2">
            <p>{description}</p>
          </div>
        ) : null}
        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
          <p className="bold">{dateRange}</p>
          <h6>{misc}</h6>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
