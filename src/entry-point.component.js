import React from 'react';
import { Navigation, Content } from './components/index';
import './styles/partials/_common.scss';

class EntryPoint extends React.Component {
  render() {
    return (
      <div className="container-fluid px-xl-4 px-lg-4">
        <div className="row">
          <Navigation />
          <Content />
        </div>
      </div>
    );
  }
}

export default EntryPoint;
