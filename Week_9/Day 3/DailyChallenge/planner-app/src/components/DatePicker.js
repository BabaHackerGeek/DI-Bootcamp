// src/components/DatePicker.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ selectedDay, onDateChange }) => {
  return (
    <DatePicker
      selected={selectedDay}
      onChange={onDateChange}
      dateFormat="yyyy-MM-dd"
      placeholderText="Select a date"
    />
  );
};

export default Calendar;
