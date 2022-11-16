/** @format */

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (data) => {
    console.log(data);

    setLoginError('');

    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
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
            {...register('email', { required: 'Email Address is required' })}
            aria-invalid={errors.email ? 'true' : 'false'}
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
          {errors.email && (
            <p className='text-danger' role='alert mt-2'>
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            {...register('password', {
              required: 'Password is Required',
              maxLength: { value: 6, message: 'Password must be 6 charecter' },
            })}
            className='form-control'
            id='exampleInputPassword1'
          />
          {errors.password && (
            <p className='text-danger' role='alert'>
              {errors.password?.message}
            </p>
          )}
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
        {loginError && <p className='text-danger'>{loginError}</p>}
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
