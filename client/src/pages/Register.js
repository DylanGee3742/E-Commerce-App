import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleSubmit(e) {
    const first_name = firstNameRef.current.value;
    const last_name = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirm_password = confirmPasswordRef.current.value;
    console.log(first_name, last_name, email, password, confirm_password);
  };

  return (
    <>
  <h1>Register</h1>
    <p>First Name:</p><input type="text" ref={firstNameRef} />
    <p>Last Name:</p><input type="text"  ref={lastNameRef} />
    <p>Email:</p><input type="email" ref={emailRef}/>
    <p>Password:</p><input type="password" ref={passwordRef}/>
    <p>Confirm Password:</p><input type="password" ref={confirmPasswordRef}/>
    <br />
    <br />
    <button type="submit" onClick={handleSubmit}>Submit</button>
    <br />
    <br />
    <NavLink to='/login'>
      Login
    </NavLink>
    </>
  )
}
