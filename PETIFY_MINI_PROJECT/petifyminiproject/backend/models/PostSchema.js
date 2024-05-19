import mongoose from "mongoose";
const Post_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },  
  image:{
    type:String,
    required:true
  },
  categories: {
    type: String,
    enums: ["cat", "dog", "birds", "others"],
    default: "dog",
  },
  userid:{
    type:String
  }
  ,
   content: {
    type: String,
    required: true,
  },
  applications:[{
    type:mongoose.Schema.ObjectId,
    ref:"Application"
  }]
});

const Post_Model = mongoose.model("post", Post_Schema);
export default Post_Model;