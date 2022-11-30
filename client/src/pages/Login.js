import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
  <>
    <h1>Login</h1>
    <NavLink to='/register'>
      Register
    </NavLink>
  </>
  )
}
