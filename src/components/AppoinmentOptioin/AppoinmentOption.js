/** @format */

import React from 'react';
import './AppoinmentOption.css';

const AppoinmentOption = ({ appoinment, treatment, setTreatment }) => {
  console.log(appoinment);

  return (
    <div className='col-lg-4 d-flex flex-column justify-content-center align-items-center'>
      <div
        className='card d-flex flex-column justify-content-center align-items-center'
        style={{ width: '18rem', height: '9rem' }}
      >
        <div className='card-body'>
          <h5 className='card-title priamry-text-color'>{appoinment.name}</h5>
          <p className='card-text'>
            {appoinment.slots.length > 0
              ? appoinment.slots[0]
              : 'No appoinment available!'}
          </p>
          <button
            data-bs-toggle='modal'
            onClick={() => setTreatment(appoinment)}
            data-bs-target='#exampleModal'
            className='btn primary-btn-color fw-semibold'
          >
            BOOK APPOINMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOption;
