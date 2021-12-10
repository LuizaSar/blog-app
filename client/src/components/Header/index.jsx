import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/ducks/authorization'
import { setSearchPosts } from '../../redux/ducks/posts'
import image from '../assets/images/blank-profile-picture-973460_1280.png'

function Header() {
	const PF = 'http://localhost:5000/images/'
	const dispatch = useDispatch()
	const handleLogout = () => {
		dispatch(logout())
	}

	const handleSearch = (event) => {
		dispatch(setSearchPosts(event.target.value))
	}

	const [user, search] = useSelector((state) => [
		state.authorization.user,
		state.posts.search,
	])

	return (
		<div className="header">
			<div className="header__search">
				<div className="header__search-box">
					<input
						type="text"
						placeholder="Search"
						className="header__search-input"
						value={search}
						onChange={handleSearch}
					/>
					<button className="header__search-btn">
						<i className="fas fa-search"></i>
					</button>
				</div>
			</div>
			<div className="header__navigation">
				<ul className="header__menu">
					<li className="header_menu-item">
						<NavLink to="/" className="header__selected">
							HOME
						</NavLink>
					</li>
					<li className="header_menu-item">
						<NavLink to="/myposts" className="header__selected">
							MY POSTS
						</NavLink>
					</li>
					<li className="header_menu-item">
						<NavLink to="/contact" className="header__selected">
							CONTACT
						</NavLink>
					</li>
					<li className="header_menu-item">
						<NavLink to="/write" className="header__selected">
							WRITE
						</NavLink>
					</li>
					<li className="header_menu-item">
						{user?.username && (
							<NavLink
								to="/"
								className="header__selected"
								onClick={handleLogout}
							>
								LOGOUT
							</NavLink>
						)}
					</li>
				</ul>
			</div>
			<div className="header__account">
				{user?.username ? (
					<div className="header__profile-picture">
						<NavLink to="/settings" className="header__selected">
							{user?.profilePic ? (
								<img src={PF + user.profilePic} alt="" />
							) : (
								<img src={image} alt="" />
							)}
						</NavLink>
					</div>
				) : (
					<>
						<NavLink to="/login" className="header__selected">
							Login
						</NavLink>
						<NavLink to="/register" className="header__selected">
							Register
						</NavLink>
					</>
				)}
			</div>
		</div>
	)
}

export default Header
