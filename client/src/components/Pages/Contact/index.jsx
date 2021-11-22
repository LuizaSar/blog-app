import React from 'react'
import './styles.css';
import image from '../../assets/images/sidebar-img.jpeg'

function Contact() {
   return (
      <div className='contact'>
         <div className="contact__item-img">
               <img src={image} alt="" />
            </div>
       <div className="contact__item">
            <div className="contact__item-follow">FOLLOW US</div>
            <div className="contact__item-icons">
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-linkedin"></i>
            </div>
            </div>
            <div className="contact__item">
            <div className="contact__item-email">For business inquiries:</div>
               techblog@gmail.com
               </div>
      </div>

   )
}

export default Contact
