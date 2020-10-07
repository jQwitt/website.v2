import React from 'react';
import scrollToName from '../scripts/scrollToName';

const PageLink = (props) => {
  const { nameToLink = '' } = props;

  return (
    <div onClick={() => scrollToName(document, window, nameToLink)}>
      <h3>{nameToLink}</h3>
    </div>
  );
};

export default PageLink;
