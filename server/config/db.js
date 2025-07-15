import mongoose from "mongoose";

export const conntecMongose = (url)=>{
 return mongoose.connect(url)
}