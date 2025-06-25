import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  
  return (
    <div className="footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-start">
          {/* Column 1 */}
          <div className="col-md-4 mb-3">
            <h5>Get to Know Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-white text-decoration-none">About Mart</Link></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Press Releases</a></li>
              <li><a href="#" className="text-white text-decoration-none">MegaMert Science</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-3">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" className="text-white text-decoration-none" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://www.twitter.com" className="text-white text-decoration-none" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com" className="text-white text-decoration-none" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-3">
            <h5>Make Money with Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Sell on MegaMart</a></li>
              <li><a href="#" className="text-white text-decoration-none">Sell under Accelerator</a></li>
              <li><a href="#" className="text-white text-decoration-none">Protect and Build Your Brand</a></li>
              <li><a href="#" className="text-white text-decoration-none">MegaMart Global Selling</a></li>
              <li><a href="#" className="text-white text-decoration-none">Supply to Mart</a></li>
              <li><a href="#" className="text-white text-decoration-none">Become an Affiliate</a></li>
              <li><a href="#" className="text-white text-decoration-none">Fulfilment by Megamart</a></li>
              <li><a href="#" className="text-white text-decoration-none">Advertise Your Products</a></li>
              <li><a href="#" className="text-white text-decoration-none">MegaMert Pay on Merchants</a></li>
            </ul>
          </div>
        </div>

        <hr className="bg-white" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Prashant. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
