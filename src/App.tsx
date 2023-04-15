import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { AdminPanel } from './adminPanel/AdminPanel';
import { StateType } from './redux/StateReducers';
import { rootStateType } from './redux/Store';



function App() {
const state = useSelector<rootStateType, StateType>(state => state.state)
  return (
    <div className="App">
        <AdminPanel state={state}/>
    </div>
  );
}

export default App;
