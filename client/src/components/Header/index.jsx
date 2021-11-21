import React from 'react'
import  "./styles.css"
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/ducks/authorization'

function Header () {
   const dispatch = useDispatch();
    
      const profilePic = useSelector( state => state.authorization.profilePic);
      const user = useSelector( state => state.authorization.username);
      
   const handleLogout = () => {
      dispatch(logout())
   };

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
                  <NavLink to='/'  className = 'header__selected' onClick={handleLogout}> LOGOUT </NavLink> 
                  }
                  </li>
            </ul>
         </div>
         <div className='header__account'>
            {user ? (
            <div className="header__profile-picture">
               <NavLink to='/settings'  className = 'header__selected'> 
               <img src={profilePic} alt="" />
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
