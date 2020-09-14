import React from 'react';
import '../styles/partials/_header-icon.scss';
import '../styles/flaticon.css';

const HeaderIcon = (props) => {
  const { icon = 'add', size = '', underline = false } = props;
  const classNames = 'flaticon-' + icon + ' ' + size;
  return (
    <div
      className={'ml-3 col-6 header-icon' + (underline ? ' underlined' : '')}
    >
      <i className={classNames} />
    </div>
  );
};

export default HeaderIcon;
