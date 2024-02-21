import React from 'react'
import "../Css/FooterRight.css"
import { MdInsertEmoticon } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { LuLink } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";

export const FooterRight = () => {
  return (
    <div className='chat-type'>
      <div className="chat-left">
        <textarea name="type-mess" className="type-mess" cols="30" rows="2" placeholder='Type your message...'></textarea>
        <div className="icon">
          <MdInsertEmoticon />
          <FaImage />
          <LuLink />
          <FaMicrophone />
          <MdMoreHoriz />
        </div>
      </div>
      <div className="chat-right">
        <button className='send'>Send <FaPaperPlane className='send-icon'/></button>
      </div>
    </div>
  )
}
