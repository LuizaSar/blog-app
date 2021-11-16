import React from 'react'
import './styles.css'
import {NavLink} from 'react-router-dom'

function Login () {
   return (
      <div className='login'>
         <div className="login__wrapper">
         <div className="login__title">Login</div>
         <form className="login__form">
            <div className="login__input-name">Email</div>
            <input type="text" placeholder='Enter your Email' />
            <div className="login__input-name">Password</div>
            <input type="text" placeholder='Enter your Password' />
            <button className="login__btn">Login</button>
         </form>
         <div className="login__or">or</div>
         <button className="login__register-btn">
         <NavLink to='/register'> Register </NavLink> 
         </button>
      </div>
      </div>
   )
}

export default Login 
