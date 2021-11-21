import React from 'react'
import './styles.css'
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {register} from '../../../redux/ducks/registration.js'

function Register () {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
     e.preventDefault();
     dispatch(register(username, password, email));
 };
 const error = useSelector(state => state.registration.error)
 const newUserName = useSelector(state => state.registration.username)
 newUserName && window.location.replace("/login")

   return (
      <div className='register'>
         <div className="register__wrapper">
          <div className="register__title">Register</div>
          {error && <div className="register__error"> That username is taken. Try another </div>}
         <form className="register__form" onSubmit={handleRegister}>
            <div className="register__input-name">Email</div>
            <input 
            type="text" 
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <div className="register__input-name">Username</div>
            <input 
            type="text" 
            placeholder='Enter your Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <div className="register__input-name">Password</div>
            <input 
            type="text" 
            placeholder='Enter your Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className="register__btn" type='submit'>Register</button>
         </form>
         <div className="register__or">or</div>
         <button className="register__login-btn">
         <NavLink to='/login'> Login </NavLink> 
         </button>
      </div>
      </div>
   )
}

export default Register 
