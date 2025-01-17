import express from "express"
import { addProduct, deleteProduct, getProduct } from "../controller/pController.js"

const pRouter = express.Router()

pRouter.post("/", addProduct)
pRouter.get("/", getProduct)
pRouter.delete("/:id", deleteProduct)
 
export default pRouter