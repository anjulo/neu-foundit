import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  console.log('App');
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
