import React from 'react';
import { ReactComponent as Signature } from '../static/signature.svg';
import '../styles/partials/_jumbo.scss';
import '../styles/flaticon.css';

const Jumbotron = (props) => {
  return (
    <div className="col-12 row full-viewport content-jumbo">
      <div className="mx-auto main">
        <>
          <Signature />
        </>
      </div>
      <div className="col-12 text-center center-bottom">
        <i className="flaticon-down-arrow large" />
      </div>
    </div>
  );
};

export default Jumbotron;
