import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [ userInfo, setUserInfo ] = useState([])

  const getUserInfo = async () => {
    const data = await fetch('http://localhost:5000');
    return console.log(data);
  };

  return (
    <>
  <h1>Home</h1>
  <NavLink to="/login">
    Login
  </NavLink>
  <br />
  <NavLink to="/register">
    Register
  </NavLink>
  <br />
  <button onClick={getUserInfo}>User info</button>
  </>
  )
}
