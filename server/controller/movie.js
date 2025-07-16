import Movie from "../model/Movie.js";
import axios from "axios";
import shows from "../model/Show.js";
export const getNowPlayingMovieS = async (req, res) => {
  try {
    const { data } = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
      headers: {
        Authorization: `Bearer ${process.env.SHOW_TOKEN} `
      }
    })
    const movie = data.results;
    res.json({ success: true, movies: movie })
  } catch (error) {
    console.log(error)
  }
}


export const addshow = async (req, res) => {
  try {
    const { moviId, showInput, showPrice } = req.body
    let finFindMovies = await Movie.findById(moviId)
    if (!finFindMovies) {
      // fet Moview From TMDB API
        const [moviesDetailResponse, movieCreditResponse] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${moviId}`, {
            headers: {
              Authorization: `Bearer ${process.env.SHOW_TOKEN} `
            }
          }),
          axios.get(`https://api.themoviedb.org/3/movie/${moviId}/credits`, {
            headers: {
              Authorization: `Bearer ${process.env.SHOW_TOKEN} `
            }
          })

        ])
      const movieData = moviesDetailResponse.data;
      const moviecredit = movieCreditResponse.data;
      let data = await Movie.create({
        _id:moviId,
        title:movieData.title,
        overview:movieData.overview,
        poster_path:movieData.poster_path,
        backdrop_path:movieData.backdrop_path,
        tagline:movieData.tagline  || " ",
        original_language:movieData.original_language,
        vote_average:movieData.vote_average,
        vote_count:movieData.vote_count,
        release_date:movieData.release_date,
        runtime:movieData.runtime
      })
     console.log(data)
    }
    const showToCreate = []
    showInput.forEach(show=>{
      const showDate = show.date
       show.time.forEach((time)=>{
        const dateTimeString = `${showDate}T${time}`
        showToCreate.push({
          movie:moviId,
          showPrice,
          showDateTime: dateTimeString,
          occupiedSeats:{}
        })
       })
    })
    if(showToCreate.length >0){
     await shows.insertMany(showToCreate)
    }
    res.json({success:true,message:"Show is Added SucessFully."})

  } catch (error){
    console.log(error)
    res.json({ sucess: false, message: error.message })
  }
}

// show all movie 

export const getallmovies= async(req,res)=>{
  
  try {
   const data = await  shows.find().populate("movie")
   const UniquieShow = new Set(data.map(show=>show.movie))
    res.json({success:true,message:"done", shows:Array.from(UniquieShow)})
  } catch (error) {
    console.log(error)
  }
}
// api to get single show from db
export const getshow = async(req,res)=>{
 try {
  const {movieid} = req.params
  const showss = await shows.find({movie:movieid}).populate("movie")
  res.json({succes:true,shows:showss})
 } catch (error) {
  console.log(error)
  res.json({succes:false,message:error.message})
 }
}
