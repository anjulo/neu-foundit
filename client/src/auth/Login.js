import React, { useState } from 'react';
import { loginThunk } from '../thunks/userThunks.js';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { username, password };
    dispatch(loginThunk(user));
  }

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Log In</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="loginUsername" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="loginUsername"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <input
              type="loginPassword"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
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
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;