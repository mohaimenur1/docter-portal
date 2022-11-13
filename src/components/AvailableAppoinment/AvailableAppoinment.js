/** @format */

import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentModal from '../AppoinmentModal/AppoinmentModal';
import AppoinmentOption from '../AppoinmentOptioin/AppoinmentOption';

const AvailableAppoinment = ({ selectedDate, setSelectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch('appoinmentOptions.json')
      .then((res) => res.json())
      .then((data) => setAppoinmentOptions(data));
  }, []);

  return (
    <div>
      <h2 className='text-center mt-5 priamry-text-color'>
        AvailableAppoinment : {format(selectedDate, 'PPP')}
      </h2>
      <div className='appoinment-section row mt-5 g-4 container'>
        {appoinmentOptions.map((appoinment) => {
          return (
            <>
              <AppoinmentOption
                key={appoinment._id}
                appoinment={appoinment}
                treatment={treatment}
                setTreatment={setTreatment}
              />
            </>
          );
        })}
      </div>
      <AppoinmentModal treatment={treatment} />
    </div>
  );
};

export default AvailableAppoinment;
