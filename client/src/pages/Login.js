import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
  <>
    <h1>Login</h1>
    <form action='http://localhost:5000/login' method='POST'>
      <div>
      <input type="email" id="email" name="email" placeholder="Email" required />
      </div>
      <div>
      <input type="password" id="password" name="password" placeholder="password" required />
      </div>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
    <NavLink to='/register'>
      Register
    </NavLink>
  </>
  )
}
