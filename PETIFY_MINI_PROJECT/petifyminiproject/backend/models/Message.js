import mongoose from "mongoose";

const message_schema=new mongoose.Schema({
    conversationid:{
        type:String
    },
    sender:{
        type:String
    },
    text:{
        type:String
    }
},{timestamps:true})

// const conversation= 
export default mongoose.model("Message",message_schema)