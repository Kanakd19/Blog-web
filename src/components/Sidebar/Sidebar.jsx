import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className='sidebarImg' src="https://images.everydayhealth.com/images/cs-prevent-as-back-pain-working-from-home-1440x810.jpg?sfvrsn=1dc5eb66_1" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Tempora enim eligendi numquam voluptatibus possimus est nihil.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram" ></i>
        </div>
        </div>
        </div>
  )
}

export default Sidebar