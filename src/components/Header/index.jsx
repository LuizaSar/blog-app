import React from 'react'
import  "./styles.css"
import {NavLink} from 'react-router-dom'

function Header () {

const user = true;

   return (
      <div className="header">
         <div className='header__social-media'>
         <i className="fab fa-instagram-square"></i>
         <i className="fab fa-facebook-square"></i>
         <i className="fab fa-twitter-square"></i>
         <i className="fab fa-linkedin"></i>
         </div>
         <div className='header__navigation'>
            <ul className='header__menu'>
               <li className='header_menu-item'>
                  <NavLink to='/'  className = 'header__selected'> HOME </NavLink> 
                  </li>
               <li className='header_menu-item'>
                  <NavLink to='/'  className = 'header__selected'> ABOUT </NavLink> 
                  </li>
               <li className='header_menu-item'>
                   <NavLink to='/'  className = 'header__selected'> CONTACT </NavLink> 
                  </li>
               <li className='header_menu-item'>
                    <NavLink to='/write'  className = 'header__selected'> WRITE </NavLink> 
                  </li>
               <li className='header_menu-item'>
                  {user && 
                  <NavLink to='/'  className = 'header__selected'> LOGOUT </NavLink> 
                  }
                  </li>
            </ul>
         </div>
         <div className='header__account'>
            {user ? (
            <div className="header__profile-picture">
               <NavLink to='/settings'  className = 'header__selected'> 
               <img src="https://images.unsplash.com/photo-1580337455351-50ca07433efd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" />
                </NavLink> 
            </div>
            ) : 
            <>
            <NavLink to='/login'    className = 'header__selected'> Login </NavLink> 
            <NavLink to='/register' className = 'header__selected'> Register </NavLink> 
            </>
            }
            <div className="header__search">
            <i className="fas fa-search"></i>
            </div>
         </div>
      </div>
   )
}

export default Header 
