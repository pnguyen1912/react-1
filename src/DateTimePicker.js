import React, { useState } from 'react';
import moment from 'moment'
import DatePicker from 'react-datepicker';

const DateTimePicker = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      minDate={(new Date(), 5)}
      placeholderText="Select a date after 5 days ago"
    />);
}

export default DateTimePicker;