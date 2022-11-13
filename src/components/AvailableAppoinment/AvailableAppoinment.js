/** @format */

import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <h2 className='text-center mt-5 priamry-text-color'>
        AvailableAppoinment : {format(selectedDate, 'PPP')}
      </h2>
    </div>
  );
};

export default AvailableAppoinment;
