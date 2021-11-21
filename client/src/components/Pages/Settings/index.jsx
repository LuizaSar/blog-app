import React from 'react'
import Sidebar from '../../Sidebar'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import {useState } from "react";
import {updateUser} from '../../../redux/ducks/authorization'

function Settings() {
   const PF = "http://localhost:5000/images/";
   const user = useSelector( state => state.authorization.user);
   const userId = useSelector( state => state.authorization.user._id);
   const updated = useSelector( state => state.authorization.updated);
   const dispatch = useDispatch();
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [file, setFile] = useState(null);

   const handleUpdateUser = (e) => {
      e.preventDefault();
      dispatch(updateUser(username, email,  password, file, userId))
      };

	return (
		<div className="settings">
			<div className="settings__wrapper">
				<div className="settings__big-title">Update your account</div>
				<div className="settings__delete-btn">
					<button>Delete account</button>
				</div>
				<form className="settings__form" onSubmit={handleUpdateUser}>
					<div className="settings__title">Profile Picture</div>
					<div className="settings__picture-input">
						<label htmlFor="file-input">
							<i class="settings__upload-btn far fa-image"></i>
						</label>
						<input 
                  type="file" 
                  id="file-input" 
                  onChange={(e) => setFile(e.target.files[0])}
                  />
						<img
							src={file ? URL.createObjectURL(file) : PF+user.profilePic}
							alt=""
						/>

					</div>
					<div className="settings__title">Username</div>
					<input 
               type="text" 
               required
               placeholder={user.username}
               onChange={e=>setUsername(e.target.value)}
               />
					<div className="settings__title">Email</div>
					<input 
               type="text" 
               required
               placeholder={user.email}
               onChange={e=>setEmail(e.target.value)}
               />
					<div className="settings__title">Password</div>
					<input
                type="text" 
                required
                placeholder="Create new password"
                onChange={(e) => setPassword(e.target.value)}
                />
               <div className="settings__update-btn">
					<button type="submit">Update</button>
				</div>
            {updated &&(
               <div className="settings__updated">
               Your profile has been updated
               </div>
            )}
				</form>
			</div>
			<Sidebar />
		</div>
	)
}

export default Settings
