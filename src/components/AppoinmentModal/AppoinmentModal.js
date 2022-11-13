/** @format */

import React from 'react';

const AppoinmentModal = ({ treatment }) => {
  //   console.log(treatment);
  return (
    <div>
      <div
        className='modal fade'
        id='exampleModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                {treatment?.name}
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>...</div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn primary-btn-color'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='submit' className='btn primary-btn-color'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentModal;
