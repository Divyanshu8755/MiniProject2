import express, { application } from "express";
import User_model from "../models/UserAuth.js";
import Postmodel from "../models/PostSchema.js"
import Applicationmodel from "../models/ApplicationSchema.js"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();
const secret_key = "adhewegfrithregrigheofeiofneojeokgroegh";

router.get('/getuser/:id',async(req,res)=>{
  let {id}=req.params
  let user=await User_model.findById(id)
  console.log(user)
  res.status(200).json({user})

})
router.get('/getthisuser/:id',async(req,res)=>{
  let {id}=req.params
  let user=await User_model.findById(id)
  let postid=user.Post
  let posts=[]
  for(let i of postid){
    let post=await Postmodel.findById(i)
    posts.push(post)
  }
  res.status(200).json({user,posts})
})
router.delete('/deleteuser/:id',async(req,res)=>{
  let {id}=req.params
  let user=await User_model.findById(id)
  let post=user.Post
  console.log(post)
  const handleapplications=async(id)=>{
    console.log("appliation id")
    await Applicationmodel.findByIdAndDelete(id)
  }
  const handlepost=async(id)=>{
    let idpost=await Postmodel.findById(id)
    let appliation=idpost.applications
    for(let i of appliation){
      handleapplications(i)
    }
    console.log("post id")
    await Postmodel.findByIdAndDelete(id)
  }
  for(let i of post){
    handlepost(i)
  }
  await User_model.findByIdAndDelete(id)
  user=await User_model.find()
  res.status(200).json({user})
})
router.patch('/makeadmin/:id',async(req,res)=>{
  let {id}=req.params;
  await User_model.findByIdAndUpdate({_id:id},{
    role:"admin"
  })
  let user=await User_model.find();
  res.status(200).json({user});
})
router.patch('/removeadmin/:id',async(req,res)=>{
let {id}=req.params;
 await User_model.findByIdAndUpdate({_id:id},{
  role:"user"
})
let user=await User_model.find()
res.status(200).json({user});
})
router.get('/getallusers',async(req,res)=>{
  let users=await User_model.find()
  res.status(200).json({users})
})
router.post("/signup", async (req, res) => {
  try {
    const { username, password, role,email, Address } = req.body;
    console.log(req.body);
    const existing_User = await User_model.findOne({ email });

    if (existing_User) {
      return res.status(200).json({ msg: "User already exists" });
    }

    const hashed_password = await bcryptjs.hashSync(password, 10);

    const new_User = await User_model.create({
      username,
      email,
      Address,
      role,
      password: hashed_password,
    });

    return res.status(200).send({ msg: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing_User = await User_model.findOne({ email });

    if (!existing_User) {
      return res.status(500).json({ msg: "User is not registered" });
    }

    const valid_password = await bcryptjs.compare(
      password,
      existing_User.password
    );
    if (!valid_password) {
      return res.status(400).send({ message: "Wrong password" });
    }

    const token = jwt.sign({ id: existing_User._id }, secret_key);
    res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" });
    return res.status(200).send(token)
  } catch (error) {
    console.log(error); 
    return res.status(500).send({ msg: error });
  }
});

router.get('/logout',async(req,res)=>{
   res.clearCookie("token").json({msg:"hogayakam"})
})

export default router;


