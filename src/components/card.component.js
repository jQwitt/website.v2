import React from 'react';
import '../styles/partials/_card.scss';
import '../styles/partials/_flaticon.scss';

const Card = (props) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-4 content-card">
      <div className="img"></div>
      <h4>Title</h4>
    </div>
  );
};

export default Card;
