/** @format */

import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className='container card p-5 rounded-pill'>
      <form className=''>
        <div
          className='form-outline mb-4 d-flex flex-column justify-content-center align-items-center'
          d-flex
          flex-column
          align-items-center
        >
          <label className='form-label' for='form2Example1'>
            Email address
          </label>
          <input
            type='email'
            id='form2Example1'
            className='form-control w-50 rounded-pill'
          />
        </div>

        <div className='form-outline mb-4 d-flex flex-column justify-content-center align-items-center'>
          <label className='form-label' for='form2Example2'>
            Password
          </label>
          <input
            type='password'
            id='form2Example2'
            className='form-control w-50 rounded-pill'
          />
        </div>

        <div className='row mb-4 '>
          <div className='col text-center'>
            <a href='#!'>Forgot password?</a>
          </div>
        </div>

        <div className='text-center'>
          <button
            type='submit'
            className='btn primary-btn-color btn-block mb-4 w-50 rounded-pill'
          >
            Sign in
          </button>
        </div>

        <div className='text-center'>
          <p>
            Not a member? <a href='#!'>Register</a>
          </p>
          <p>or sign up with:</p>
          <button
            type='button'
            className='btn primary-btn-color btn-floating mx-1'
          >
            <i className='fab fa-facebook-f'></i>
          </button>

          <button
            type='button'
            className='btn primary-btn-color btn-floating mx-1'
          >
            <i className='fab fa-google'></i>
          </button>

          <button
            type='button'
            className='btn primary-btn-color btn-floating mx-1'
          >
            <i className='fab fa-twitter'></i>
          </button>

          <button
            type='button'
            className='btn primary-btn-color btn-floating mx-1'
          >
            <i className='fab fa-github'></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
