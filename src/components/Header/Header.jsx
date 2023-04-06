import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <div className="headerTitleSm">React & Node</div>
            <div className="headerTitleLg">Blog</div>
        </div>
        <img className="headerImg"
         src="https://wallpapercave.com/wp/wp2551977.jpg" 
         alt=""  />
    </div>
  )
}

export default Header