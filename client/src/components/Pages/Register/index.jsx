import React from 'react'
import './styles.css'
import {NavLink} from 'react-router-dom'

function Register () {
   return (
      <div className='register'>
         <div className="register__wrapper">
          <div className="register__title">Register</div>
         <form className="register__form">
            <div className="register__input-name">Email</div>
            <input type="text" placeholder='Enter your Email' />
            <div className="register__input-name">Username</div>
            <input type="text" placeholder='Enter your Username' />
            <div className="register__input-name">Password</div>
            <input type="text" placeholder='Enter your Password' />
            <button className="register__btn">Register</button>
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
