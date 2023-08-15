import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux"; 
import userReducer from './reducers/userReducer.js';


const store = configureStore({
  reducer : {
    user: userReducer
  }
})
function App() {
  console.log('App');
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
