import express from "express";
import { addshow, getallmovies, getNowPlayingMovieS, getshow } from "../controller/movie.js";

const showRoutes = express.Router()
 showRoutes.get("/getNowPlayingMovie",getNowPlayingMovieS)
 showRoutes.post("/add-show",addshow)
 showRoutes.get("/getshows",getallmovies)
 showRoutes.get("/getshowid/:movieid",getshow)
export default showRoutes