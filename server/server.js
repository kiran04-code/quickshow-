import express from "express"
const app = express()
import {config} from "dotenv"
import { conntecMongose } from "./config/db.js"
import cors from "cors"
config()
const Port  = process.env.PORT || 6010
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.get("/",(req,res)=>{
  res.send("Wroking Fine The Bankend!")
})
conntecMongose(process.env.MONGODB_URI).then(()=>{
    console.log("Mongodb is Connected")
}).catch((err)=>{
    console.log("ERROR",err)
})
app.listen(Port,(req,res)=>{
    console.log(`Server is Runing on Port http://localhost:${Port}`)
})