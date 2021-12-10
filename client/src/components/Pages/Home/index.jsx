import React from 'react'
import Posts from '../../Posts'
import Hero from '../../Hero/index'
import Sidebar from '../../Sidebar'
import './styles.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../../redux/ducks/posts.js'
import { useLocation } from 'react-router'

function Home() {
	const dispatch = useDispatch()

	const [posts, postsLoading] = useSelector((state) => [
		state.posts.items,
		state.posts.loading,
	])

	const { search } = useLocation()

	useEffect(() => {
		dispatch(fetchPosts(search))
	}, [search])

	return (
		<div>
			<Hero />
			<div className="home">
				{postsLoading ? (
					<div className="home__loading">Loading... </div>
				) : (
					<>
						<Posts posts={posts} />
						<Sidebar />
					</>
				)}
			</div>
		</div>
	)
}

export default Home
