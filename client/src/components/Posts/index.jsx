import React from 'react'
import './styles.css'
import Post from './Post'
import { useSelector } from 'react-redux'

function Posts({ posts }) {
	const [search] = useSelector((state) => [state.posts.search])

	const filteredPosts = posts.filter((item) => {
		return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
	})

	return (
		<div className="posts">
			{filteredPosts.map((post, key) => {
				return <Post post={post} key={key} />
			})}
		</div>
	)
}

export default Posts
