/** @format */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className='container card p-5 mt-5'>
      <h2 className='text-center display-5 fw-semibold'>Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            {...register('email')}
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            {...register('password')}
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <div className='mb-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        {/* <p>{data}</p> */}
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <div className='text-center'>
          <p>
            Not a member? <Link to='/register'>Register</Link>
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

export default Login;
