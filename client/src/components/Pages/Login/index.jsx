import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setAuth } from '../../../redux/ducks/authorization.js'

function Login() {
	const dispatch = useDispatch()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = (e) => {
		e.preventDefault()
		dispatch(setAuth(username, password))
	}

	const [error, loading] = useSelector((state) => [
		state.authorization.error,
		state.authorization.loading,
	])

	return (
		<div className="login">
			<div className="login__wrapper">
				<div className="login__title">Login</div>
				{error && (
					<div className="login__error">
						<p>Incorrect username or password.</p>
						<p>Try again.</p>
					</div>
				)}
				<form className="login__form" onSubmit={handleLogin}>
					<div className="login__input-name">Username</div>
					<input
						type="text"
						required
						placeholder="Enter your Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<div className="login__input-name">Password</div>
					<input
						type="text"
						required
						placeholder="Enter your Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="login__btn" type="submit" disabled={loading}>
						Login
					</button>
				</form>
				<div className="login__or">or</div>
				<button className="login__register-btn">
					<NavLink to="/register"> Register </NavLink>
				</button>
			</div>
		</div>
	)
}

export default Login
