import React from 'react'
import "../Css/HeaderRight.css"
import { FaPhone } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

export const HeaderRight = () => {
  return (
    <div className='header-right'>
      <div className="chatting-info">
        <span className='chatting-name'>Aang</span>
        <MdKeyboardArrowDown/>
        <span className='statement'>Active now</span>
      </div>
      <div className="function">
        <button className='call function-button'><FaPhone className='icons'/></button>
        <button className='video-call function-button'><FaVideo className='icons'/></button>
        <button className='more function-button'><MdMoreVert className='more-icon'/></button>
      </div>
    </div>
  )
}
