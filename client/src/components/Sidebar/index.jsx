import React from 'react'
import './styles.css'
import logo from '../assets/images/sidebar-img.jpeg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/ducks/categories'
import { Link } from 'react-router-dom'
import image from '../assets/images/blank-profile-picture-973460_1280.png'

function Sidebar() {
	const dispatch = useDispatch()

	const [categories, user] = useSelector((state) => [
		state.categories.items,
		state.authorization.user,
	])

	const PF = 'http://localhost:5000/images/'

	useEffect(() => {
		dispatch(fetchCategories())
	}, [])

	return (
		<div className="sidebar">
			<div className="sidebar__items">
				{user.username ? (
					<div className="sidebar__item">
						<div className="sidebar__item-title">{user.username}</div>
						<div className="sidebar__item-img">
							{user?.profilePic ? (
								<img src={PF + user.profilePic} alt="" />
							) : (
								<img src={image} />
							)}
						</div>
					</div>
				) : (
					<div className="sidebar__item">
						<div className="sidebar__item-title">TECH BLOG</div>
						<div className="sidebar__item-img">
							<img src={logo} alt="" />
						</div>
					</div>
				)}
				<div className="sidebar__item">
					<div className="sidebar__item-title">CATEGORIES</div>
					<ul className="sidebar__item-list">
						{categories.map((category, key) => {
							return (
								<li key={key}>
									<Link to={`/?category=${category.name}`}>
										{category.name}
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
				<div className="sidebar__item">
					<div className="sidebar__item-title">FOLLOW US</div>
					<div className="sidebar__item-icons">
						<i className="fab fa-instagram-square"></i>
						<i className="fab fa-facebook-square"></i>
						<i className="fab fa-twitter-square"></i>
						<i className="fab fa-linkedin"></i>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
