import React from 'react'
import './Contact.css'

export default function ContactForm() {
  return (
    <div className='form-el'>
<form className='contact-form'>
    <h1>Hello there, how can we help you?</h1>
 <input type='text' placeholder='Name'/><br/>
 <input type='email' placeholder='Email'/><br/>
 <input type='text' placeholder='Message'/><br/><br/>
 <input type="submit" value="FIND A TABLE" className='submit'></input>
</form>
    </div>
  )
}
