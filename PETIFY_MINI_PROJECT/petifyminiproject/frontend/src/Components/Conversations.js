import React, { useEffect, useState } from 'react'
import "../Cssfiles/Conversation.css"
import  axios  from 'axios'
const Conversations = ({conversation,currentuser}) => {
  const [user,setuser]=useState()
  useEffect(()=>{
    const friendid=conversation.members.find((m)=>m !== currentuser)
    const getuser=async()=>{
      let res=await axios.get(`http://localhost:8080/api/v1/getthisuser/${friendid}`)
      return res.data.user
    }
    getuser().then((data)=>setuser(data))
  },[currentuser,conversation])
  // console.log(user)
  return (
    <div className='conversations'>
        <img  className='conversationimg' src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" />
        <span className='conversationname'>{user?user.username:"User"}</span>
    </div>
  )
}

export default Conversations