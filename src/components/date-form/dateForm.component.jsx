import React from "react";
import './date-form.styles.css'

function DateForm({ date }) {
  if(date){
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  const day = Number(date.slice(8));
  const newDate = new Date(year, month, day);
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{newDate.toLocaleString('default', { month: 'long' })}</div>
      <div className='expense-date__year'> {newDate.getFullYear()}</div>
      <div className='expense-date__day'>{newDate.getDate()}</div>
    </div>
  )}
  else{
    return(
      <div className='expense-date'>
        N/D
      </div>
    )
  }
}

export default DateForm;
