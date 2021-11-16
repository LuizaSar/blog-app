import React from 'react'
import './styles.css'

function Write() {
   return (
      <div className='write'>
         <div className='write__img'>
            <img src="https://images.unsplash.com/photo-1556559322-b5071efadc88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
         </div>
         <form className='write__form'>
         <div className="write__title-form">
            <div className="write__upload-btn">
               <label htmlFor="fileId">
               <i className="write__img-icon far fa-image"></i>
               </label>
            <input className='write__input-image'type="file" id="fileId"/>
            </div>
            <input className='write__input-title' type="text" placeholder="Title" autoFocus={true}/>
            <button className='write__btn'>Publish</button>
         </div>
         <div className="write__text-form">
            <textarea className='write__text-input' placeholder='Start here...'></textarea>
         </div>
         </form>
      </div>
   )
}

export default Write
