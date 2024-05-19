// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import { connectdb } from "./databse.js";
// import userRoutes from "./routes/UserRoute.js";
// import PostRoute from "./routes/PostRoutte.js";
// import applicationRoute from "./routes/Application.js"
// import Conversation  from "./routes/Conversaation.js";
// import message from "./routes/Message.js"
// import cookieParser from "cookie-parser";
// const app = express();
// app.use(cors({
//     credentials:true,
//     origin: 'http://localhost:3000',
// }

// ));
// app.use(cookieParser())
// app.use(express.json())
// const PORT = 8080;
// app.use("/api/v1",userRoutes)
// app.use("/api/v2",PostRoute)
// app.use("/api/v3",applicationRoute)
// app.use("/api/v4",Conversation)
// app.use("/api/v5",message)
// connectdb();

// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(PORT, () => console.log(`server is running  on port ${PORT}!`));




import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { connectdb } from "./databse.js";
import Ngoroutes from "./routes/Ngoroutes.js"
import Doctorroutes from "./routes/Doctorroutes.js"
import userRoutes from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoutte.js";
import applicationRoute from "./routes/Application.js"
import Conversation  from "./routes/Conversaation.js";
import message from "./routes/Message.js"
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000',
}

));
app.use(cookieParser())
app.use(express.json())
const PORT = 8080;
app.use("/api/v1",userRoutes)
app.use("/api/v2",PostRoute)
app.use("/api/v3",applicationRoute)
app.use("/api/v4",Conversation)
app.use("/api/v5",message)
app.use("/api/v6",Ngoroutes )
app.use("/api/v7" , Doctorroutes)

connectdb();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => console.log(`server is running  on port ${PORT}!`));
