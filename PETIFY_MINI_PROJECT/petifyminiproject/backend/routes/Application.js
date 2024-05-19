import express from 'express'
import PostModel from "../models/PostSchema.js";
import ApplicationModel from"../models/ApplicationSchema.js"
import User_model from '../models/UserAuth.js';
const router=express.Router()

router.post('/createapplication',async(req,res)=>{
    try {
    const {firstname,lastname,userid,content,email,postid}=req.body;
    console.log(firstname)
    const user=await User_model.findById(userid)
    const appliction=await ApplicationModel.create({
        firstname,lastname,content,postid,email,userid
    })
    const post=await PostModel.findById(postid)
    if(!post)
    {res.status(200).json({msg:"post not found"})}
    post.applications.push(appliction._id);
    post.save()
    user.applicationid.push(appliction._id)
    user.save()
    res.status(200).json({msg:"Application send successfully"})
    } catch (error) {
        console.log(error)
    }
})
router.get('/getmyapplication/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const user=await User_model.findById(id)
        const applications=user.applicationid
        const myapplications=[]
       
        for(let i of applications){
            const tempapplication=await ApplicationModel.findById(i)
            myapplications.push(tempapplication)
        }
        
        res.status(200).json({myapplications})
    } catch (error) {
     console.log(error)   
    }
})
router.get('/getapplicaton/:id',async(req,res)=>{
    try {
        const {id}=req.params
        console.log(req.params)
        console.log(id)
        const post=await PostModel.findById(id)
        console.log(post)
        const applictionid=post.applications
        let allapplication=[]
        for(let i of applictionid){
            let appliction=await ApplicationModel.findById(i)
            allapplication.push(appliction)
        }
        res.status(200).json({allapplication})
    } catch (error) {
        console.log(error)
    }
})
export default router