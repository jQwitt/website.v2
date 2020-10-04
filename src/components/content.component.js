import React from 'react';
import {
  Jumbotron,
  HeaderIcon,
  ContentItem,
  Card,
  EducationItem,
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
          </div>
          <div className="row" name="experience">
            <HeaderIcon icon="coding-1" />
            <ContentItem
              title="Software Development Engineer Intern"
              subTitle="Expedia Group"
              description="Worked on Expedia's Virtual Agent Control team tasked with creating, testing, and deploying a rich information display within a configurable, embeddable UI framework. Worked closely with UI/UX, product management, and senior engineers in order to implement a refund card with cross browser and unit testing."
              dateRange="Jun 2020 - Aug 2020"
              misc="React, JavaScript, HTML, SASS, Selenium, Jest, Visual Studio Code"
            />
            <ContentItem
              title="Web Development Intern"
              subTitle="Bonsai Media Group"
              description="Utilized front-end technologies to deliver dynamic, client customized CMS sites. Through close collaboration with product managers, SEO specialists, and company management, I achieved successful E-commerce sites via Shopify and WordPress."
              dateRange="Nov 2018 - Aug 2019"
              misc="JavaScript, HTML/CSS, SQL, Shopify, Wordpress, Visual Studio"
            />
          </div>
          <div className="row" name="projects">
            <HeaderIcon icon="coding" />
            <Card
              title="website.v2"
              subTitle="A UI focused, responsive app using modern technologies"
            />
            <Card
              title="QueryCreator"
              subTitle="Frontend build for a PHP backend to build valid SQL"
            />
            <Card
              title="Website"
              subTitle="My first four iterations of a basic HTML/CSS/JS site"
            />
          </div>
          <div className="row" name="education">
            <HeaderIcon icon="graduation" />
            <EducationItem
              title="Seattle University"
              subTitle="B.S. Computer Science, Mathematics Minor"
            />
            <EducationItem title="York School" subTitle="High School Diploma" />
          </div>
          <div className="row align-items-center" name="contact">
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
