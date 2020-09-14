import React from 'react';
import '../styles/partials/_jumbo.scss';
import '../styles/flaticon.css';

const Jumbotron = (props) => {
  return (
    <div className="col-12 row full-viewport content-jumbo">
      <div className="mx-auto d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center main-icon">
        <i className="flaticon-video-camera jumbo" />
        <h2>Movie Nerd</h2>
      </div>
      <div className="col-12 text-center center-bottom">
        <i className="flaticon-down-arrow large" />
      </div>
    </div>
  );
};

export default Jumbotron;
