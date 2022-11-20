/** @format */

import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import './AppoinmentModal.css';

const AppoinmentModal = ({ selectedDate, treatment, setTreatment }) => {
  const date = format(selectedDate, 'PPP');
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;
    const patienName = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const details = {
      appoinmentDate: date,
      slot,
      treatment: treatment?.name,
      patient: patienName,
      email,
      phone,
    };

    console.log(details);
    setTreatment(null);
  };

  return (
    <div>
      <div
        className='modal fade'
        id='exampleModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
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
            <div className='modal-body'>
              <form onSubmit={handleBooking}>
                <div className='form-outline'>
                  <label className='form-label' htmlFor='formControlLg'>
                    Date
                  </label>
                  <input
                    type='text'
                    id='formControlLg'
                    value={date}
                    disabled
                    className='form-control form-control-lg'
                  />
                </div>
                <div className='form-outline'>
                  <label className='form-label' htmlFor='formControlLg'>
                    Select Your Time Slot
                  </label>
                  <select
                    name='slot'
                    className='form-select'
                    aria-label='Default select example'
                  >
                    {treatment?.slots?.map((slot, i) => {
                      return (
                        <option value={slot} key={i}>
                          {slot}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='form-outline'>
                  <label className='form-label' htmlFor='formControlLg'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    defaultValue={user?.displayName}
                    disabled
                    id='formControlLg'
                    className='form-control form-control-lg'
                  />
                </div>
                <div className='form-outline'>
                  <label className='form-label' htmlFor='formControlLg'>
                    email
                  </label>
                  <input
                    type='email'
                    name='email'
                    defaultValue={user?.email}
                    disabled
                    id='formControlLg'
                    className='form-control form-control-lg'
                  />
                </div>
                <div className='form-outline'>
                  <label className='form-label' htmlFor='formControlLg'>
                    Phone
                  </label>
                  <input
                    type='text'
                    name='phone'
                    id='formControlLg'
                    className='form-control form-control-lg'
                  />
                </div>
                <button
                  type='submit'
                  className='btn primary-btn-color w-100 mt-3'
                >
                  Submit
                </button>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn primary-btn-color'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentModal;
