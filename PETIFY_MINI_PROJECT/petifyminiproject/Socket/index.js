const io=require('socket.io')(8900,{
    cors:{
        origin:"http://localhost:3000"
    }
});
let users=[];
const adduser=(userid,socketid)=>{
    !users.some((user)=>user.userid===userid)&&
    users.push({userid,socketid})
}
const removeuser=(socketid)=>{
    users=users.filter(user=>user.socketid!== socketid)
}
const getuser=(userid)=>{
    return users.find(user=>user.userid===userid)
}
io.on("connection",(socket)=>{
    console.log("a user connected")
    socket.on("adduser",userid=>{
        adduser(userid,socket.id)
        io.emit("getusers",users)
    })

    socket.on("sendmessage",({senderid,receiverid,text})=>{
        const user=getuser(receiverid)
        io.to(user?.socketid).emit("getmessage",{
            senderid,text
        })
    })

    socket.on("disconnect",()=>{
        console.log("a user disconnected")
        removeuser(socket.id)
        io.emit("getusers",users)
    })
})