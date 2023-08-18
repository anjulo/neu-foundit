import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInModal from '../auth/SignInModal.js';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className="fst-italic">foundit!</span></a>
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
          <a className="ms-3" data-bs-toggle="modal" data-bs-target="#signInModal">
            <i className="fa-solid fa-right-to-bracket"></i>
          </a>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;
