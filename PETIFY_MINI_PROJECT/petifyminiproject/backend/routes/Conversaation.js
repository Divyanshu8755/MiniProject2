import express from 'express'
import Conversation from "../models/Conversation.js";
const router=express.Router()

router.post("/createconversation",async(req,res)=>{
    const newconversation=new Conversation({
        members:[req.body.senderid,req.body.receiverid]
    })
    try {
        const savedconversation=await newconversation.save()
        res.status(200).json({savedconversation})
    } catch (error) {
        console.log(error)
    }
})

router.get("/getconversaton/:id",async(req,res)=>{
    try {
        const conversation=await Conversation.find({
            members:{$in:[req.params.id]}
        })
        res.status(200).json({conversation})
    } catch (error) {
        
    }
})
export default router