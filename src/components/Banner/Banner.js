/** @format */

import React from 'react';
import './Banner.css';
import BannerImg from './img/b-img.png';

const Banner = () => {
  return (
    <div className='container mt-5'>
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-md-6'>
          <div className='h-100 p-5 rounded-3'>
            <h1 className='fw-bold display-4 bannner-text-color'>
              24/7 FOR YOU
            </h1>
            <p>
              Be healthy and be healthy secure. Always wearing musks keep safe
              from unhealthy and unwanted activities.
            </p>
            <button
              className='btn banner-btn-bg rounded-pill fw-bold btn-lg'
              type='button'
            >
              GET STARTED
            </button>
          </div>
        </div>
        {/* banner right side */}
        <div className='banner-img col-lg-6'>
          <img className='img-fluid' src={BannerImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
