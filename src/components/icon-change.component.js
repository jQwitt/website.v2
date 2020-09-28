import React, { useState } from 'react';
import '../styles/partials/_flaticon.scss';

const IconChange = (props) => {
  const { firstIcon = 'add', secondIcon = 'substract', className = '' } = props;
  const [icon, setIcon] = useState(true);

  const toggleIcon = () => {
    setIcon(!icon);
  };

  return (
    <div className={className + ' icon'} onClick={toggleIcon}>
      <i
        data-testid="togglesIcon"
        className={'flaticon-' + (icon ? firstIcon : secondIcon) + ' medium'}
      ></i>
    </div>
  );
};

export default IconChange;
