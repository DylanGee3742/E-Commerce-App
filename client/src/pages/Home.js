import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
  <h1>Home</h1>
  <NavLink to="/register">
    Register
  </NavLink>
  </>
  )
}
