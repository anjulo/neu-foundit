import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  console.log('App');
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
