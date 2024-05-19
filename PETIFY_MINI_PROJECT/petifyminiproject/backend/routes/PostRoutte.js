import express from "express";
import PostModel from "../models/PostSchema.js";
import UserModel from "../models/UserAuth.js";
import verifytoken from "../middleware/verifytoken.js";
import Applicationmodel from "../models/ApplicationSchema.js";

const router = express.Router();

router.post("/createpost/:userid", async (req, res) => {
  const { userid } = req.params;
  console.log(userid)
  const { name, categories, image,content } = req.body;
  try {
    const newPost = await PostModel.create({
      name,
      categories,
      image,
      userid,
      content,
    });
    const user = await UserModel.findById(userid);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    user.Post.push(newPost._id);
    await user.save();

    return res.status(201).send({ message: "Post created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get('/getAllPosts',async(req,res)=>{
    let allposts=await PostModel.find();
    res.status(200).json({allposts})
})

router.get('/getthispost/:id',verifytoken,async(req,res)=>{
  let id=req.params.id
  let post=await PostModel.findById(id)
  console.log(post)
  if(!post){
    res.status(200).json({msg:"nothing found"})  
  }
  res.status(200).json({post})
})

router.delete('/deletemypost/:_id/:id',async(req,res)=>{
  console.log("system")
  let postid=req.params.id
  let userid=req.params._id
  let user=await UserModel.findById(userid)
  let userpost=user.Post
  let posting=userpost.filter((post)=>post._id!=postid)
  let deletepost=userpost.filter((post)=>post._id==postid)
  let findpost=await PostModel.findById(deletepost)
  findpost=findpost.applications
  const deleteapplication=async(id)=>{
    await Applicationmodel.findByIdAndDelete(id)
  }
  console.log("asdkfalsdjflksdjflasdjkfladskjflkfj")
  console.log(findpost)
  for(let i of findpost){
    deleteapplication(i)
  }
  await PostModel.findByIdAndDelete(postid)
  console.log(posting)
  let length=user.Post.length
  for(let i=0;i<length;i++){
    user.Post.pop()
  }
  for(let i of posting){
    user.Post.push(i)
  }
  user.save()
  console.log(user.Post)
  res.status(200).json({posting})
})

router.get('/getMyPosts/:_id',verifytoken,async(req,res)=>{
    let _id=req.params._id
    // console.log(req.params)
    // console.log(_id)
    let user=await UserModel.findById(_id)
    let Post=user.Post
    // console.log(Post)
    let posts=[]
    for(let i of Post){
      let post=await PostModel.findById(i);
      posts.push(post)
    }

    res.status(200).json({success:true,posts})
})

export default router;