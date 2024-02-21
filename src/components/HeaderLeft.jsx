import React from 'react'
import "../Css/HeaderLeft.css"
import { IoPerson } from "react-icons/io5";

export const HeaderLeft = () => {
  return (
    <div className='nav-bar'>
      <div className="search">
        <input type="text" placeholder='People, Groups and Messages' className='search-input' />
        <IoPerson className='person-icon' />
      </div>
      <div className="nav">
        <div className="tab active-tab">All</div>
        <div className="tab">Read</div>
        <div className="tab">Unread</div>
      </div>
    </div>
  )
}
