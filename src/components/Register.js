import React from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
<>
<form>

  <input placeholder='username' type='text' />
  <input placeholder='email'  type='email'/>
  <input placeholder='password'  type='password'/>
  <button type='submit'>submit</button>
</form>
    <NavLink to="/">login</NavLink>
</>
  )
}

export default Register