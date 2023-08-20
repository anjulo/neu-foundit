import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import CurrentUser from './components/CurrentUser.js';
import userReducer from './reducers/userReducer.js';
import Home from 'pages/Home.js';
import Items from 'pages/Items.js';
import About from 'pages/About.js';
import Report from 'pages/Report.js';
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';


const store = configureStore({
  reducer : {
    user: userReducer
  }
})
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CurrentUser>
          <Header />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/items" element={<Items />} />
              <Route path="/report" element={<Report />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </CurrentUser>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
