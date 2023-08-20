import React from 'react';
import Navbar from './Navbar.js';
import SignInModal from '../auth/SignInModal.js';
import SignUpModal from '../auth/SignUpModal.js';

const Header = () => {
  return (
    <div>
      <header className="header sticky-top">
        <Navbar />
      </header>
      <SignInModal />
    </div>
  );
}

export default Header;
