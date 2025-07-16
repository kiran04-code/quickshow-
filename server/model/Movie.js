import mongoose, { Schema } from "mongoose"

const MovieSchema = new mongoose.Schema({
  _id: {type:String},
  title: { type: String, required: true },
  overview: { type: String, required: true },
  tagline: { type: String, required: true },
  poster_path: { type: String, required: true },
  backdrop_path: { type: String, required: true },
  genres: { type: Array, required: true },
  casts:{ type: Array, required: true }, // optional or replace with actual schema
  release_date: Date,
  original_language: { type: String,},
  vote_average: Number,
  vote_count: Number,
  runtime: Number,
}, {
  timestamps: true,
});


const Movie = mongoose.model("moviesdata",MovieSchema)


export default Movie

