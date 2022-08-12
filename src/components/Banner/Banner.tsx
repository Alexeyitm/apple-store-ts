import React from 'react';
import s from './Banner.module.scss';
import img from '../../images/banner-iphone.png';

function Banner() {
  return (
    <section className={s.banner}>
      <h1 className={s.banner__title}>IPhone, MacBook, IPad и Airpods из США</h1>
      <img className={s.banner__png} src={img} alt="banner"/>
    </section>
  );
}

export default Banner;
