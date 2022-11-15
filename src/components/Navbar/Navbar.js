/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-bg shadow-sm rounded'>
        <div className='container'>
          <Link className='navbar-brand fw-semibold'>Navbar</Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-link fw-semibold'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/appoinment' className='nav-link fw-semibold'>
                  Appoinment
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-semibold'>About</Link>
              </li>
              <li className='nav-item'>
                <Link to='/login' className='nav-link fw-semibold'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
