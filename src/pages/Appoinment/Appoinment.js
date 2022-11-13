import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <h2>Appoint</h2>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />
      <p>You have selected date: {format(selectedDate, "PPP")}</p>
    </div>
  );
};

export default Appoinment;
