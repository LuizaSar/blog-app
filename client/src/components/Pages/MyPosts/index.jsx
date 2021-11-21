import React from 'react'
import Sidebar from '../../Sidebar'
import './styles.css'
import Post from '../../Posts/Post'
import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts} from '../../../redux/ducks/posts.js'
import { useLocation } from "react-router";

function MyPosts() {
   const dispatch = useDispatch();
   const { search } = useLocation();
   const posts = useSelector(state => state.posts.items);
   const username = useSelector(state => state.authorization.user.username);
   const filteredPosts = posts.filter((post, key)=>{
      if(username === post.username) { return post} 
   })
   useEffect(() => {
      window.scroll(0, 0);
      dispatch(fetchPosts(search));
    }, [search]);
    
   return (
      <div className='myposts'>
         <div className="myposts__items">
         {filteredPosts.map((post, key)=>{
             return <Post post={post} key={key}/>
         })}
         </div>
         <Sidebar/>
      </div>
   )
}
export default MyPosts
