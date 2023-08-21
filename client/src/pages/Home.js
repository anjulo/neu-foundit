import React from 'react';
import NEU_Hero from '../assets/images/krentzman_quad.jpeg';
import reportLost from '../assets/images/report_lost.png';
import reportFound from '../assets/images/report_found.png';

const Home = () => {
  // logo
  // report lost item 

  return (
    <div className="">
      <div className="row d-flex justify-content-center mb-5">
        <img src={NEU_Hero} className="img-fluid" alt="Responsive image" style={{ height: '50%', width: '100%' }} />
      </div>
      <div className="d-flex justify-content-around mb-5">
        <a href="#">
          <img src={reportLost} />
        </a>
        <a href="#">
          <img src={reportFound} />
        </a>
      </div>

      <div className="bg-dark text-white">
        <h2 className="text-center">How it Works</h2>
        <div className="d-flex justify-content-around">
          <div>
            <h2> Step 1</h2>
            <p>Sign up or Log in to your account</p>
          </div>
          <div>
            <h2> Step 2</h2>
            <p> Report a lost or found item</p>
          </div> 
          <div>
            <h2> Step 1</h2>
            <p>Wait for someone to reachout </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
