import React, { useState } from 'react';
import { isRouteErrorResponse, NavLink } from 'react-router-dom';

export default function Register() {
  const [error, setError ] = useState('');

  return (
    <>
  <h1>Register</h1>
  
    <form action="http://localhost:5000/register" method="POST" >
    <div>
    <input type="text" id="first_name" name="first_name" placeholder="First Name(s)" required />
    </div>
    <div>
    <input type="text" id="last_name" name="last_name"  placeholder="Last Name" required />
    </div>
    <div>
    <input type="email" id="email" name="email"  placeholder="Email" required />
    </div>
    <div>
    <input type="password" id="password" name="password"  placeholder="Password" required />
    </div>
    <div>
    <input type="password" id="confirm_password" name="confirm_password"  placeholder="Confirm Password" required />
    </div>
    <br />
    <br />
    <button type="submit">Submit</button>
    </form>
    <br />
    <br />
    <NavLink to='/login'>
      Login
    </NavLink>
    </>
  )
};

