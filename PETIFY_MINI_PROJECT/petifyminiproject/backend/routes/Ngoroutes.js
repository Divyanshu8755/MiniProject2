import express from "express";
import mongoose from "mongoose";
const router =  express.Router();
import NGOmodel from "../models/NgoSchema.js"

router.use(express.urlencoded({extended:true}));
router.use(express.json());


router.get('/pet', (req,res)=>{
    res.send("Connected to ngo")
})


router.post('/create' , async(req,res)=>{
   try{
    const {Name , Adress , Pincode , image } = req.body;
    console.log(Name);
  await NGOmodel.create({
    Name , Adress , Pincode , image
  })
  res.send("Successfully Added");
   }
   catch(error){
    res.send(`Error occured ${error}`)

   }
})


router.delete("/delete/:id" , async(req,res)=>{
   try{
    const {id} = req.body;
   await NGOmodel.findByIdandDelete(id);
   res.send("Deleted Successfully")
   }
   catch(error){
    res.send(`error occured ${error}`)
   }

})





















export default router;