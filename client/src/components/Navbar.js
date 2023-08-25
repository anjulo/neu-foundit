import React from 'react';
import '../assets/styles/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk } from '../thunks/userThunks.js';
import { Link, useLocation } from 'react-router-dom';
import NEU_Logo from '../assets/images/neu_logo.jpeg';

const Navbar = () => {
  const { currentUser } = useSelector(state => state.user)
  const { pathname } = useLocation()
  const lastPath = pathname.split('/').at(-1);
  const dispatch = useDispatch();
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={NEU_Logo} alt="logo" width="25" height="25" className="me-2" />
          <Link to="/" className="navbar-brand text-success" href="#"><span className="fst-italic">foundit!</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className={`nav-link ${lastPath==="" ? "active": ""}`} aria-current="page" href="#">Home</Link>
              <Link to="/items" className={`nav-link ${lastPath==="items" ? "active": ""}`} href="#">Items</Link>
              <Link to="/about" className={`nav-link ${lastPath==="about" ? "active": ""}`} href="#">About</Link>
              <div className="dropdown ">
                <a
                  className={`nav-link dropdown-toggle ${lastPath.startsWith("report") ? "active" : ""}`}
                  href="#" id="report-dropdown" role="button" 
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Report
                </a>
                <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="report-dropdown">
                  <Link to="/reportlost" className={`dropdown-item ${lastPath==="reportlost" ? "active": ""}`} href="#">Lost</Link>
                  <hr class="dropdown-divider"></hr>
                  <Link to="/reportfound" className={`dropdown-item ${lastPath==="reportfound" ? "active": ""}`} href="#">Found</Link>
                </div>

              </div>
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
              <a className="btn btn-info dropdown-toggle" href="#" role="button" id="user-dropdown"
                data-bs-toggle="dropdown" aria-expanded="false">
                {currentUser.username}
              </a>
              <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="user-dropdown">
                <a className="dropdown-item" href="#">Profile</a>
                <a className="dropdown-item" href="#"
                  onClick={() => dispatch(logoutThunk())}>
                  Log Out
                </a>
              </div>
            </div>
          }
        </div>
      </nav>
    </div>

  )
}

export default Navbar;
