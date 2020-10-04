import React from 'react';
import '../styles/partials/_header-icon.scss';
import '../styles/flaticon.css';

const HeaderIcon = (props) => {
  const {
    icon = 'add',
    size = 'xlarge',
    underline = true,
    fullWidth = true,
  } = props;
  const classNames = 'flaticon-' + icon + ' ' + size;
  return (
    <div
      className={
        'ml-3 header-icon' +
        (underline ? ' underlined' : '') +
        (fullWidth ? ' col-12' : ' col-6')
      }
    >
      <i className={classNames} />
    </div>
  );
};

export default HeaderIcon;
