import React from 'react';
import {
  Jumbotron,
  HeaderIcon,
  ContentItem,
  Card,
  Contact,
  Footer,
} from './index';
import '../styles/partials/_content.scss';
import '../styles/partials/_flaticon.scss';

const Content = (props) => {
  return (
    <div className="col-12 row mx-auto">
      <div className="col-xl-3 col-lg-4"></div>
      <div className="col-xl-9 col-lg-8 col-12 content">
        <div className="container-fluid">
          <div className="row">
            <Jumbotron />
            <HeaderIcon icon="coding-1" size="xlarge" underline={true} />
            <ContentItem
              title="Job 1"
              subTitle="company"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam velit ut neque porta, at maximus nisl malesuada. Sed interdum nisi in nulla aliquet, sed laoreet tellus lacinia."
            />
            <ContentItem
              title="Job 2"
              subTitle="company"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam velit ut neque porta, at maximus nisl malesuada. Sed interdum nisi in nulla aliquet, sed laoreet tellus lacinia."
            />
            <HeaderIcon icon="coding" size="xlarge" underline={true} />
          </div>
          <div className="row">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="row">
            <HeaderIcon icon="graduation" size="xlarge" underline={true} />
            <ContentItem width="half" title="School 1" subTitle="Degree" />
            <ContentItem width="half" title="School 2" subTitle="Degree" />
          </div>
          <div className="row align-items-center">
            <Contact />
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
