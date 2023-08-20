import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk } from '../thunks/userThunks.js';
import NEU_Logo from '../assets/images/neu_logo.jpeg';

const Navbar = () => {
  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={NEU_Logo} alt="logo" width="25" height="25" className="me-2" />
          <a className="navbar-brand text-success" href="#"><span className="fst-italic">foundit!</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#">Lost Items</a>
              <a className="nav-link" href="#">Found Items</a>
              <a className="nav-link" href="#">Contact</a>
              <a className="nav-link" href="#">About</a>
            </div>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          {
            !currentUser &&
            <a className="ms-3" data-bs-toggle="modal" data-bs-target="#signInModal">
              <i className="fa-solid fa-right-to-bracket"></i>
            </a>
          }
          {
            !currentUser ||
            <div className="dropdown ms-3">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                data-bs-toggle="dropdown" aria-expanded="false">
                {currentUser.username}
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#"
                  onClick={() => dispatch(logoutThunk())}>
                  Log Out
                </a>
                </li>
              </ul>
            </div>
          }
        </div>
      </nav>
    </div>

  )
}

export default Navbar;
