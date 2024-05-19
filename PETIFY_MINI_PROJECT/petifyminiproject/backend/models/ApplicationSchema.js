import mongoose from "mongoose"

const Applicationschema= new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    userid:{
        type:String
    },
    email:{
        type:String,
        required :true
    }
    ,
    postid:{
        type:String
    }
})

const Application_model=mongoose.model("Application",Applicationschema)
export default Application_model;