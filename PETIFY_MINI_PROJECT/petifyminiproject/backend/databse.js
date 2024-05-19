import mongoose from "mongoose";

export const connectdb=()=>{
    mongoose.connect("mongodb://localhost:27017/petAdoption").then(()=>{
        console.log("Db is connected");
    }).catch((err)=>console.log(err))
}
