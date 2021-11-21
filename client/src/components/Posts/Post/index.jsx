import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

function Post ({post}) {
   const PF = "http://localhost:5000/images/"; 
   return (
      <div className='post'>
      <NavLink to={`/post/${post._id}`}> 
         {post.photo && (
         <div className="post__img">
            <img src={PF + post.photo} alt="" />
         </div>
         )}
         <div className="post__categories">
            {post.categories.map((category, key) => {
               return <span key={key}>{category}</span>
            }
          ) }
         </div>
         <div className="post__content">
            <div className="post__title">{post.title}</div>
            <div className="post__date">{new Date(post.createdAt).toDateString()}</div>
            <div className="post__text">{post.desc}.</div>
         </div>
      </NavLink>
      </div>
     
   )
}

export default Post
