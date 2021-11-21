import React from 'react'
import Sidebar from '../../Sidebar'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';

function Settings() {
   const user = useSelector( state => state.authorization.user);
   
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
							src={user.profilePic}
							alt=""
						/>
					</div>
					<div className="settings__title">Username</div>
					<input 
               type="text" 
               placeholder={user.username}
               />
					<div className="settings__title">Email</div>
					<input 
               type="text" 
               placeholder={user.email}
               />
					<div className="settings__title">Password</div>
					<input
                type="text" 
                />
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
