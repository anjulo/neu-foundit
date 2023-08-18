import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux"; 
import CurrentUser from './components/CurrentUser.js';
import userReducer from './reducers/userReducer.js';
import SignInModal from './auth/SignInModal.js';


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
          <div className="container-fluid">
            <Navbar />
            <SignInModal />
          </div>
        </CurrentUser>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
