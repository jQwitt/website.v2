import React from 'react';
import { ReactComponent as Signature } from '../static/signature.svg';
import scrollToName from '../scripts/scrollToName';
import '../styles/partials/_jumbo.scss';
import '../styles/flaticon.css';

const Jumbotron = () => (
  <div className="col-12 row full-viewport content-jumbo">
    <div className="mx-auto main">
      <>
        <Signature />
      </>
    </div>
    <div
      className="col-12 text-center center-bottom"
      onClick={() => scrollToName(document, window, 'experience')}
    >
      <i className="flaticon-down-arrow large pulse" />
    </div>
  </div>
);

export default Jumbotron;
