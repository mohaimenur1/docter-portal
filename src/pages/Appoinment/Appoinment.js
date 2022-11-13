/** @format */

import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import AvailableAppoinment from '../../components/AvailableAppoinment/AvailableAppoinment';
import AppoinmentImg from './img/appoinmentdocimg.png';

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className='container'>
      <h2 className='text-center mt-4 display-4 fw-semibold priamry-text-color'>
        Appoint
      </h2>
      <div className='row d-flex justify-content-center align-items-center mt-5'>
        <div className='col-lg-6 d-flex flex-column justify-content-center align-items-center'>
          <DayPicker
            mode='single'
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
        <div className='col-lg-6 d-flex flex-column justify-content-center align-items-center'>
          <img
            className='img-fluid'
            src={AppoinmentImg}
            alt='appoinment logo'
          />
        </div>
      </div>
      {/* available appoinment component */}
      <AvailableAppoinment
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default Appoinment;
