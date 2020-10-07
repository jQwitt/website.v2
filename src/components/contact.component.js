import React from 'react';
import SocialMedia from './social-media.component';
import '../styles/partials/_contact.scss';

const Contact = () => (
  <div className="col-12 text-center contact">
    <div>
      <h1>Lets Talk!</h1>
      <SocialMedia size="large" />
    </div>
  </div>
);

export default Contact;
