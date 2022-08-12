import React from 'react';
import s from './App.module.scss';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className={s.app}>
      <div className={s.app__container}>
        <Header/>
        <Banner/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
