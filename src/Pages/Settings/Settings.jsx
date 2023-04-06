import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'

import "./Settings.css"

const Settings = () => {
    const user= true;
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete ACcount</span>
                </div>
                <form className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                   
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                            alt="" />
                        <label htmlFor="fileInput">
                            <i className='settingsPPIcon far fa-user-circle'></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder='Kanak' className='settingsInput' />
                    <label>Email</label>
                    <input type="email" placeholder='kanak@gmail.com' className='settingsInput' />
                    <label>Password</label>
                    <input type="password" className='settingsInput'/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings