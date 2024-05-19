import React from 'react'
import "../Cssfiles/Message.css"
import {format} from "timeago.js"
const Message = ({message,own}) => {
  return (
    <div className={own?"message own":"message"}>
        <div className="messagetop">
            <img className='messageimg' src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" />
            <p className='messagetext'>{message.text}</p>
        </div>
        <div className="messagebottom">{format(message.createdAt)}</div>
    </div>
  )
}

export default Message