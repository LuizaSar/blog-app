import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, updatePost } from '../../redux/ducks/posts.js'
import { useState } from 'react'

function PostContent({ post }) {
	const dispatch = useDispatch()
	const PF = 'http://localhost:5000/images/'
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [updateMode, setUpdateMode] = useState(false)

   const changeUpdateMode = () => {
      setUpdateMode(true);
      setDesc(post.desc);
      setTitle(post.title)
   }
	const handleDelete = () => {
		dispatch(deletePost(post, username))
	}
   const handleUpdate = () => {
		dispatch(updatePost(title, desc, username, post))
	}

   const [username, postLoading] = useSelector((state) => [
      state.authorization.user.username,
      state.posts.loading,
    ]);

	return (
		<div className="post-content">
			{post.photo && (
				<div className="post-content__img">
					<img src={PF + post.photo} alt="" />
				</div>
			)}
			{updateMode ? (
				<input
					className="update__input-title"
               value={title}
					type="text"
					autoFocus={true}
					onChange={(e) => setTitle(e.target.value)}
				/>
			) : (
				<div className="post-content__title">
					{post.title}
					{post.username === username && (
						<div className="post-content__edit">
							<i class="far fa-edit" onClick={changeUpdateMode}></i>
							<i class="far fa-trash-alt" onClick={handleDelete}></i>
						</div>
					)}
				</div>
			)}
			<div className="post-content__info">
				<div className="post-content__author">
					Author:
					<Link to={`/?user=${post.username}`}>
						<span> {post.username} </span>
					</Link>
				</div>
				<div className="post-content__date">
					Published: <span>{new Date(post.createdAt).toDateString()}</span>
				</div>
			</div>
			{updateMode ? (
            <>
				<textarea
					className="update__text-input"
               value={desc}
					onChange={(e) => setDesc(e.target.value)}
				></textarea>
            <button className='update__btn' onClick={handleUpdate}>Update</button>
            </>
			) : (
				<div className="post-content__text">{post.desc}</div>
			)}
		</div>
	)
}

export default PostContent
