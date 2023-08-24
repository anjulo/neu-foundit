import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import CurrentUser from './components/CurrentUser.js';
import userReducer from './reducers/userReducer.js';
import Header from 'components/Header.js';
import SignInModal from './auth/SignInModal.js';
import SignUpModal from './auth/SignUpModal.js';
import Home from 'pages/Home.js';
import Items from 'pages/Items.js';
import About from 'pages/About.js';
import Footer from 'components/Footer.js';
import ReportLost from 'pages/ReportLost.js';
import ReportFound from 'pages/ReportFound.js';
import itemsReducer from 'reducers/itemsReducer.js';



const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsReducer,
  }
})
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CurrentUser>
          <Header />
          <SignInModal />
          <SignUpModal />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/items" element={<Items />} />
              <Route path="/reportlost" element={<ReportLost /> }/>
              <Route path="/reportfound" element={<ReportFound /> }/>  
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
