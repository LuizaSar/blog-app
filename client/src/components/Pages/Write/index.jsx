import React from 'react'
import {useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { submitPost, uploadFile } from '../../../redux/ducks/posts';
import './styles.css'

function Write() {
   const dispatch = useDispatch();
   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("");
   const [file, setFile] = useState(null);
   const username = useSelector(state=>state.authorization.user.username)

   const handleSubmitPost = (e) => {
      e.preventDefault();
      dispatch(submitPost(username, title, desc, file))
      };

   return (
      <div className='write'>
         <div className='write__img'>
         {file && (
        <img src={URL.createObjectURL(file)} alt="" />
      )}
         </div>
         <form className='write__form' onSubmit={handleSubmitPost}>
         <div className="write__title-form">
            <div className="write__upload-btn">
               <label htmlFor="fileId">
               <i className="write__img-icon far fa-image"></i>
               </label>
            <input 
            className='write__input-image'
            type="file" 
            id="fileId"
            onChange={(e) => setFile(e.target.files[0])}
            />
            </div>
            <input 
            className='write__input-title' 
            type="text" 
            placeholder="Title" 
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
            />
            <button className='write__btn' type="submit">Publish</button>
         </div>
         <div className="write__text-form">
            <textarea 
            className='write__text-input' 
            placeholder='Start here...'
            onChange={e=>setDesc(e.target.value)}
            ></textarea>
         </div>
         </form>
      </div>
   )
}

export default Write
