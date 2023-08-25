import React, { useState } from 'react';
import { registerThunk } from '../thunks/userThunks.js';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleSignup = () => {
    // if (signupUsername === '' || signupPassword === '') {
    //   setError('Username and password cannot be empty');
    //   return;
    // }

    if (signupPassword !== confirmPassword) {
      setSignupError('Passwords do not match');
      return;
    }

    const user = { username: signupUsername, password: signupPassword };
    dispatch(registerThunk(user));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Sign Up</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={(e) => setSignupUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setSignupPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {
            error &&
            <div className="alert alert-danger">
              {error}
            </div>
          }
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup;