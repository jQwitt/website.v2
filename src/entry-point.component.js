import React from 'react';
import Navigation from './components/nav.component';
import Content from './components/content.component';
import './styles/partials/_common.scss';
import loadContent from './scripts/loader';

class EntryPoint extends React.Component {
  componentDidMount() {
    loadContent();
  }

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
