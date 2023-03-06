import React from 'react';
import Button from '../Button/Button';

const tg = window.Telegram.WebApp;

const onClose = () => {
  tg.close();
};

const Header = () => {
  return (
    <div className={'header'}>
      <Button onClick={onClose}>close</Button>
      <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};

export default Header;
