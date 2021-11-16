import React from 'react'
import Sidebar from '../../Sidebar'
import './styles.css'

function Settings() {
	return (
		<div className="settings">
			<div className="settings__wrapper">
				<div className="settings__big-title">Update your account</div>
				<div className="settings__delete-btn">
					<button>Delete account</button>
				</div>
				<form className="settings__form">
					<div className="settings__title">Profile Picture</div>
					<div className="settings__picture-input">
						<label htmlFor="file-input">
							<i class="settings__upload-btn far fa-image"></i>
						</label>
						<input type="file" id="file-input" />
						<img
							src="https://images.unsplash.com/photo-1580337455351-50ca07433efd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
							alt=""
						/>
					</div>
					<div className="settings__title">Username</div>
					<input type="text" placeholder="Melissa" />
					<div className="settings__title">Email</div>
					<input type="text" placeholder="Melissa@gmail.com" />
					<div className="settings__title">Password</div>
					<input type="text" placeholder="Melissa66" />
               <div className="settings__update-btn">
					<button>Update</button>
				</div>
				</form>
			</div>
			<Sidebar />
		</div>
	)
}

export default Settings
