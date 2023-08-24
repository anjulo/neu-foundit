import React from 'react';
import Logo from '../assets/images/neu_logo.jpeg';
const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>About <em>NEU-foundit!</em></h2>
          <p>
            Welcome to the Northeastern University Lost and Found App! Our mission is to help the Northeastern community
            efficiently report lost items and connect them with their rightful owners.
          </p>
          <p>
            With our user-friendly platform, you can report lost items, search for found items, and easily get in touch
            with other users to facilitate item returns.
          </p>
          <p>
            We are committed to providing a seamless experience and contributing to a more connected and helpful
            Northeastern community.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={Logo}// Replace with your actual image path
            alt="About Our App"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
