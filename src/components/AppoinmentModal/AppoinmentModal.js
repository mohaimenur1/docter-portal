/** @format */

import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';
import './AppoinmentModal.css';

const AppoinmentModal = ({
  selectedDate,
  treatment,
  setTreatment,
  refetch,
}) => {
  const date = format(selectedDate, 'PPP');
  const { user } = useContext(AuthContext);

  function handleCloseModal() {
    document.getElementById('myModal').classList.remove('show', 'd-block');
    document
      .querySelectorAll('.modal-backdrop')
      .forEach((el) => el.classList.remove('modal-backdrop'));
  }

  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;
    const patienName = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appoinmentDate: date,
      slot,
      treatment: treatment?.name,
      patient: patienName,
      email,
      phone,
    };

    //fetching bookings post api data
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    }).then((data) => {
      console.log(data);
      setTreatment(null);
      toast('Booking confirm.');
      refetch();
    });

    console.log(booking);
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
                  onClick={handleCloseModal}
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn primary-btn-color w-100 mt-3'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentModal;
