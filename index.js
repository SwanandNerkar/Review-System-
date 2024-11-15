import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import router from "./routes/FeedbackRoutes.js";

const app = express();

const PORT = 3000;

app.use(express.json());

// mounting
app.use("/api/v1", router)

dotenv.config();

dbConnect();

app.listen(PORT, () => {
  console.log("Server is running at port:", PORT);
});













// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import dbconnect from "./config/database.js";
// import User from "./models/Users.js"

// const app = express();

// const PORT = 3000;

// // midele-ware
// app.use(express.json);

// dotenv.config();        // loading environment variables in index.js

// dbconnect();

// app.post("/api/v1/admin/create/rt", async (req, res)=>{
//     try{
//         const {name, email, password} = req.body;

//         const user = new User({
//             name,
//             email,
//             password,
//             role : "Admin"
//         })
//         const savedUser = await user.save();

//         res.json({
//             savedUser,
//             message : "User created successfully"
//     })
//     // res.send("hii ok");
//     }
//     catch(error){
//         res.json({error : "Error occured"})
//     }
    
// })
// app.get("/fg",(req,res)=>{
//     res.send("working postyy");
// })


   
// app.listen(3000, ()=> {
//     console.log("Server succefully started");
    
// })


