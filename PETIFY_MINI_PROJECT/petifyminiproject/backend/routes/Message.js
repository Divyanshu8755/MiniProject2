import express from 'express'
import message from '../models/Message.js'
const router=express.Router()

router.post('/sendmessage',async(req,res)=>{
    const newmessage=new message(req.body)
    try {
        const savedmessage=await newmessage.save()
        res.status(200).json({savedmessage})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.get('/getmsg/:id',async(req,res)=>{
    try {
        const messages=await message.find({
            conversationid:req.params.id
        })

        res.status(200).json({messages})
    } catch (error) {
        res.status(500).json({error})
    }
})

export default router