import React from 'react';
import '../styles/partials/_education-item.scss';
import '../styles/flaticon.css';

const EducationItem = (props) => {
  const { title, subTitle, description } = props;
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 education-item">
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
          <div className="col-9">
            <p>{description}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EducationItem;
