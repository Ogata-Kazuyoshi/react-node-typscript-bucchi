import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import dataApi from './api/data';

function App() {
  const clickHandler = async () => {
    const temp = await dataApi.getAll();
    console.log(temp);
  };

  return (
    <>
      <div>
        <button onClick={clickHandler}>click me!!!</button>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
