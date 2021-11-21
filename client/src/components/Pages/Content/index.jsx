import React from 'react'
import './styles.css'
import Sidebar from '../../Sidebar/index'
import PostContent from '../../PostContent/index'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPost } from '../../../redux/ducks/posts.js'

function Content() {
	const dispatch = useDispatch()
	const location = useLocation()
	const path = location.pathname.split('/')[2]
	const post = useSelector((state) => state.posts.item)

	useEffect(() => {
      window.scroll(0, 0);
		dispatch(fetchPost(path))
	}, [path])

	return (
		<div className="content">
			<PostContent post={post}/>
			<Sidebar />
		</div>
	)
}

export default Content
