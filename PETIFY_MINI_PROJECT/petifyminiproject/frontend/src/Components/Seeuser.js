import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Seeuser = () => {
  const location=useLocation()
  const [user,setuser]=useState([])
  const [post,setpost]=useState([])
  const id=location.pathname.split('/')[2]
  const handlepage=async()=>{
    let res=await axios.get(` http://localhost:8080/api/v1/getthisuser/${id}`).catch((err)=>console.log(err))
    setuser(res.data.user)
    setpost(res.data.posts)
  }
  useEffect(()=>{
    handlepage().catch((err)=>console.log(err))
  },[])
  console.log(user)
  console.log(post)
  return (
    <div>
      
    </div>
  )
}

export default Seeuser