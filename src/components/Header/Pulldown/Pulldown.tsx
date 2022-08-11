import React from 'react';
import s from './Pulldown.module.scss';

function Pulldown() {
  return (
    <div className={s.pulldown}>
        <div className={s.pulldown__phone}></div>
        <button className={s.pulldown__link}>Выбрать модель телефона
          <div className={s.pulldown__arrow}></div>
        </button>
    </div>
  );
}

export default Pulldown;
