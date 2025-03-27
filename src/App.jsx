// src/App.jsx
import { useState } from 'react';
import * as weatherService from './services/weatherService';
const App = () => {
const fetchData = async () => {
  const data = await weatherService.show('Seattle');
  console.log('Data ', data);
}

  return (
    <>
    <h1>Hello world!</h1>
    <button onClick={fetchData}>Fetch Weather Data</button>
    </>
  );
}

export default App
