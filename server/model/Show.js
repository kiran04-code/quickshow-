import mongoose from "mongoose"

const showSchema = new mongoose.Schema({
  movie:{
    type:String,
    require:true,
    ref:"moviesdata",
  },

  showDateTime:{
    type:String,
    require:true
  },
  showPrice:{
    type:Number,
    require:true
  },
  occupiedSeats:{
    type:Object,
    default:{}
        
  },
},{minimize:false})

const shows = mongoose.model("shows",showSchema)

export default shows