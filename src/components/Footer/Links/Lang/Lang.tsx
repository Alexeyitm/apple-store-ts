import React from 'react';
import s from './Lang.module.scss';

function Lang() {

  const langs: string[] = ["Рус", "Eng", "Каз"];

  return (
    <div className={s.lang}>
      <div className={s.lang__world}></div>
      {langs.map(lang => <a className={s.lang__link} key={lang}>{lang}</a>)}
    </div>
  );
}

export default Lang;
