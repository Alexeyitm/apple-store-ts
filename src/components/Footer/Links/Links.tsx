import React from 'react';
import s from './Links.module.scss';
import Lang from './Lang/Lang';

function Links() {

  const links: string[] = ["Избранное", "Корзина", "Контакты", "Условия сервиса", ""];

  return (
    <ul className={s.links}>
      {links.map(link => 
        <li key={link}><a className={s.links__link} href="#">{link}</a></li>
      )}
      <li>
        <Lang/>
      </li>
    </ul>
  );
}

export default Links;
