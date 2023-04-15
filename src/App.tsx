import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Filter } from './components/Filter';




function App() {
  const state = useSelector<any, string>(state => state.state)
  return (
    <div className="app">
      <Header />
      <div className={'header_presentation'}></div>
      <Filter />

      {state}
    </div>
  );
}

export default App;
