import React from 'react'
import './styles.css'
import Post from './Post'

function Posts({posts}) {
   return (
      <div className="posts">
         {posts.map((post, key)=>{
             return <Post post={post} key={key}/>
         })}
        
      </div>
   )
}

export default Posts
