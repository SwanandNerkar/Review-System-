import mongoose from "mongoose";

const dbconnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected successfully");
        
    }
    catch(error){
        console.log("Connection failed!!!", error);
        
    }
}

// dbconnect();
export default dbconnect;