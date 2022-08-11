import React from 'react';
import s from './App.module.scss';
import Header from './Header/Header';

function App() {
  return (
    <div className={s.app}>
      <div className={s.app__container}>
        <Header />
      </div>
    </div>
  );
}

export default App;
