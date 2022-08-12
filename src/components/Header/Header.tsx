import React from 'react';
import s from './Header.module.scss';
import Pulldown from './Pulldown/Pulldown';
import ButtonLike from './ButtonLike/ButtonLike';
import ButtonBasket from './ButtonBasket/ButtonBasket';
import ButtonBurger from './ButtonBurger/ButtonBurger';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>STORE</div>
      <Pulldown/>
      <ButtonLike/>
      <ButtonBasket/>
      <ButtonBurger/>
      
    </header>
  );
}

export default Header;
