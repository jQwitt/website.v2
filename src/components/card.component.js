import React from 'react';
import '../styles/partials/_card.scss';
import '../styles/partials/_flaticon.scss';

const Card = (props) => {
  const { title, subTitle } = props;
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-4 content-card">
      <div className="img" />
      <div className="text">
        {title ? <h4>{title}</h4> : null}
        {subTitle ? <h6>{subTitle}</h6> : null}
      </div>
    </div>
  );
};

export default Card;
