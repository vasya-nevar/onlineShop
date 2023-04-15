import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useSelector } from 'react-redux';




function App() {
const state = useSelector<any, string>(state => state.state)
  return (
    <div className="App">
  {state}
    </div>
  );
}

export default App;
