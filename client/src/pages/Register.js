import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { registeruser } from '../api/register';

export default function Register() {
  // const [error, setError ] = useState('');
  // const firstNameRef = useRef();
  // const lastNameRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const confirm_passwordRef = useRef()

  // const handleSubmit = async () => {
  //   const first_name = firstNameRef.current.value;
  //   const last_name = lastNameRef.current.value;
  //   const email = emailRef.current.value;
  //   const password = passwordRef.current.value;
  //   const confirm_password = confirm_passwordRef.current.value;
  //   console.log(first_name, last_name, email, password, confirm_password);
  //   const response = await registeruser(first_name, last_name, email, password, confirm_password);
  //   console.log(response)
  //   return response;
  // };

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
    <button type="submit">Submit</button>
    <br />
    <br /> 
    </form>
    {/* <div>
    <input type="text" id="first_name" name="first_name" placeholder="First Name(s)" ref={firstNameRef} required />
    </div>
    <div>
    <input type="text" id="last_name" name="last_name"  placeholder="Last Name" ref={lastNameRef}required />
    </div>
    <div>
    <input type="email" id="email" name="email"  placeholder="Email" ref={emailRef} required />
    </div>
    <div>
    <input type="password" id="password" name="password"  placeholder="Password" ref={passwordRef} required />
    </div>
    <div>
    <input type="password" id="confirm_password" name="confirm_password"  placeholder="Confirm Password" ref={confirm_passwordRef} required />
    </div> */}
    <br />
    <br />
    <NavLink to='/login'>
      Login
    </NavLink>
    </>
  )
};

