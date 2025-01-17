import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connext");
    
}).catch(()=>{
    console.log("not");
    
})