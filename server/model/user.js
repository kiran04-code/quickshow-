import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     _id:{
        type:String,
        require:true
     },
    phone:{
        type:Number,
        require:true
    },
    image:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    }
})

const User = mongoose.model("users",userSchema)

export default User