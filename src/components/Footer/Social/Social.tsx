import React from 'react';
import s from './Social.module.scss';

function Social() {

  return (
    <div className={s.social}>
      <a className={s.social__vk}></a>
      <a className={s.social__inst}></a>
      <a className={s.social__tg}></a>
      <a className={s.social__wa}></a>
    </div>
  );
}

export default Social;
