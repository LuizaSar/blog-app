import React from 'react'
import  "./styles.css"

function Header () {
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
               <li className='header_menu-item'>HOME</li>
               <li className='header_menu-item'>ABOUT</li>
               <li className='header_menu-item'>CONTACT</li>
               <li className='header_menu-item'>WRITE</li>
               <li className='header_menu-item'>LOGOUT</li>
            </ul>
         </div>
         <div className='header__account'>
         <div className="header__profile-picture">
            <img src="https://images.unsplash.com/photo-1580337455351-50ca07433efd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" />
            </div>
            <div className="header__search">
            <i className="fas fa-search"></i>
            </div>
         </div>
      </div>
   )
}

export default Header 
