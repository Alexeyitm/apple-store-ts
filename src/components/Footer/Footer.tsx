import React from 'react';
import s from './Footer.module.scss';
import Links from './Links/Links';
import Social from './Social/Social';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer__logo}>STORE</div>
      <Links/>
      <Social/>
    </footer>
  );
}

export default Footer;
