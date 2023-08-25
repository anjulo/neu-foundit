import React, { useState } from 'react';
import { loginThunk } from '../thunks/userThunks.js';
import { useDispatch } from 'react-redux';

const SignInModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const handleSignInBtn = () => {
    const user = { username, password };
    if (username === '' || password === '') {
      setError('Username and password cannot be empty');
      return;
    }
    dispatch(loginThunk(user))
  }

  return (
    <div>
      <div className="modal fade" id="signInModal" tabIndex="-1" aria-labelledby="signInModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signInModalLabel">Log In</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Email address</label>
                  <input type="text" className="form-control" id="signin-username"
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="signin-password"
                    onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="rememberMe" className="form-check-label">Remember Me</label>
                  <input type="checkbox" className="form-check-input" id="signin-rememberMe" />
                </div>
                {
                  error &&
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                }
              </form>
            </div>
            <div className="modal-footer">
              <small>
                Don't have an account?{' '}
                <a href="#" data-bs-toggle="modal" data-bs-target="#signUpModal" className="text-decoration-none">
                  Sign Up
                </a>
              </small>


              <button type="button" className="btn btn-primary"
                onClick={handleSignInBtn}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
