import React from 'react';

const DatePicker = ({ onSelectDate }) => {
  const handleDateChange = (e) => {
    onSelectDate(e.target.value);
  };

  return (
    <input type="date" onChange={handleDateChange} />
  );
};

export default DatePicker;
