import React,{useState} from 'react';
import CurrentLocation from './CurrentLocation';
import './App.css';

function App() {
  return (
    <>
    <div className=' container'>
      <CurrentLocation/>
    </div>
    <div className='footer'>
      <a href='https://www.linkedin.com/in/paritosh-pareek-1055b6197/'>Paritosh Pareek</a>

    </div>
    </>
  );
}

export default App;
