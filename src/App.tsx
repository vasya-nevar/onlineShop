import React from 'react';
import './App.css';

import { useSelector } from 'react-redux';
import { AdminPanel } from './adminPanel/AdminPanel';
import { StateType } from './redux/StateReducers';
import { rootStateType } from './redux/Store';

import { Header } from './components/Header';
import { Filter } from './components/Filter';
import { Routes, Route } from 'react-router-dom'




function App() {
  const state = useSelector<rootStateType, StateType>(state => state.state)
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path={'/admin'} element={<AdminPanel state={state} />}/>
      </Routes>
      <div className={'header_presentation'}></div>
      <Filter />
    </div>
  );
}
export default App;
