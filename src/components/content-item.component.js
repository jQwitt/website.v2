import React from 'react';
import '../styles/partials/_content-item.scss';
import '../styles/flaticon.css';

const ContentItem = (props) => {
  const { title, subTitle, description } = props;
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
          <div className="col-10">
            <p>{description}</p>
          </div>
        ) : null}
        <div className="col-2">
          <p className="bold">Date Rane</p>
          <h6>Technologies</h6>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
