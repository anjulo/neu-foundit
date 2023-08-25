import React, { useState } from 'react';
import Login from '../auth/Login.js';
import Signup from '../auth/Signup.js';

const Auth = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Login />
        </div>
        <div className="col-md-6">
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default Auth;
