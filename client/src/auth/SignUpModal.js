import React, { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { registerThunk } from '../thunks/userThunks.js';
import { useDispatch, useSelector } from 'react-redux';

const SignUpModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const handleSignUpBtn = () => {
    if (username === '' || password === '') {
      setError('Username and password cannot be empty');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const user = { username, password };
    dispatch(registerThunk(user))
  }

  return (
    <div>
      <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signUpModalLabel">Sign Up</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Email address</label>
                  <input type="text" className="form-control" id="signup-username"
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="signup-password"
                    onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="signup-password-confirm"
                    onChange={e => setConfirmPassword(e.target.value)} />
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="rememberMe" className="form-check-label">Remember Me</label>
                  <input type="checkbox" className="form-check-input" id="signup-rememberMe" />
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
                Already have an account?{' '}
                <a href="#" data-bs-toggle="modal" data-bs-target="#signInModal" className="text-decoration-none">
                  Log In
                </a>
              </small>
              <button type="button" className="btn btn-primary"
                onClick={handleSignUpBtn}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
