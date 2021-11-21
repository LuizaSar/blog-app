import React from 'react'
import './styles.css'
import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {fetchCategories} from '../../redux/ducks/categories'
import { Link } from 'react-router-dom'


function Sidebar() {
   const dispatch = useDispatch();
   const categories = useSelector(state => state.categories.items);
   
  useEffect(() => {
   dispatch(fetchCategories());
 }, []);

   return (
      <div className="sidebar">
         <div className='sidebar__items'>
         <div className="sidebar__item">
            <div className="sidebar__item-title">ABOUT ME</div>
            <div className="sidebar__item-img">
               <img src="https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1008&q=80" alt="" />
            </div>
            <div className="sidebar__item-text">
            I'm Melissa Fenster, CTO at Cosmo Consult.
            I'm a technology enthusiast, working mainly on Microsoft Dynamics 365, Azure and Docker. 
            Always trying to push the limits.
            </div>
         </div>
         <div className="sidebar__item">
            <div className="sidebar__item-title">CATEGORIES</div>
            <ul className="sidebar__item-list">
               {categories.map((category, key)=>{
                  return (
                     <li key={key}> 
                     <Link to={`/?category=${category.name}`} > 
                     {category.name} 
                  </Link>
                  </li>
                  )
               })}
            </ul>
         </div>
         <div className="sidebar__item">
            <div className="sidebar__item-title">FOLLOW ME</div>
            <div className="sidebar__item-icons">
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-linkedin"></i>
            </div>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
