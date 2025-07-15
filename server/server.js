import express from "express"
const app = express()
import {config} from "dotenv"
import { conntecMongose } from "./config/db.js"
import { clerkMiddleware,getAuth,clerkClient,requireAuth } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/inngest.js"
import cors from "cors"
config()
const Port  = process.env.PORT || 6010
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(clerkMiddleware())

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
app.get('/protected', requireAuth(), async (req, res) => {
  const { userId } = getAuth(req)
  const user = await clerkClient.users.getUser(userId)
  return res.json({ user })
})
app.use("/api/inngest", serve({ client: inngest, functions }));
app.listen(Port,(req,res)=>{
    console.log(`Server is Runing on Port http://localhost:${Port}`)
})  