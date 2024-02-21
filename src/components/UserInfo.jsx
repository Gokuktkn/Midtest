import React from 'react'
import "../Css/UserInfo.css"

export const UserInfo = ({item}) => {
  return (
    //active-user
    <div className='user-container'> 
      <div className="user-info">
        <img src={item.avt} alt="user-avt" className='user-avt' />
        <div className="info">
          <span className='name'>{item.name}</span>
          <span className='newest-message'>abcsyz</span>
        </div>
      </div>
      <p className='time'>Just now</p>
    </div>
  )
}
