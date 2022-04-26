import React from 'react'
import './Contact.css'
export default function ReservationForm() {
  return (
    <div>
<form className='ResForm'>
  <select name="people" className='people'>
    <option value="1person">1 Person</option>
    <option value="2people">2 People</option>
    <option value="3people">3 People</option>
    <option value="3people">4 People</option>
  </select>
  <input className='form-el2' type="date" id="birthday" name="date"/>
  <input className='form-el2' type="time"/><br/>
<input type="submit" value="Submit" className='submit'></input>
</form>
    </div>
  )
}
