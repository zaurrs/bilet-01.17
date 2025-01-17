import mongoose from "mongoose";

const pSchema = new mongoose.Schema({
    name: {type: String, required:true},
    image: {type: String, required:true},
    price: {type: Number, required:true},
    category: {type: String, required:true},
},{collection:"Products", timestamps:true})
const product = mongoose.model("Products", pSchema)
export default product