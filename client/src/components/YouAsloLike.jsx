import React from 'react'
import { dummyShowsData } from '../assets/assets';
import timeFirmater from '../lib/TIME.JS';
import { StarIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import BlurCircle from '../components/Reused';

const YouAsloLike = () => {
  const { datasearch } = useAuth();
  const navigate = useNavigate();
  const filtermovie = dummyShowsData.filter((data) =>
    data.title.toLowerCase().includes(datasearch?.toLowerCase().trim() || "")
  );

  return (
    filtermovie && filtermovie ? (<div className='px-4 md:px-12 lg:px-20 py-10'>
      <h1 className='text-3xl md:text-4xl font-bold text-white mb-2 mt-25'>You May Also Like</h1>
      <div className='w-24 h-1 rounded-xl bg-primary mb-8'></div>

      <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {filtermovie.map((movies) => (
          <div
            key={movies._id}
            className='flex flex-col justify-between p-4 bg-gray-800 rounded-2xl hover:-translate-y-2 transition duration-300'
          >
            <img
              src={movies.backdrop_path}
              alt=""
              onClick={() => {
                navigate(`/MoviesDetails/${movies._id}`);
                scrollTo(0, 0);
              }}
              className='rounded-lg h-48 sm:h-52 w-full object-cover cursor-pointer'
            />
            <BlurCircle/>
            <p className='font-semibold mt-3 text-lg text-white'>{movies.title}</p>
            <p className='text-sm text-gray-400 mt-1'>
              {new Date(movies.release_date).getFullYear()} ·{" "}
              {movies.genres.slice(0, 2).map(g => g.name).join(" | ")} ·{" "}
              {timeFirmater(movies.runtime)}
            </p>

            <div className='flex items-center justify-between mt-4'>
              <button
                onClick={() => {
                  navigate(`/MoviesDetails/${movies._id}`);
                  scrollTo(0, 0);
                }}
                className='bg-primary px-6 py-2 text-sm rounded-full hover:bg-primary-dull transition'
              >
                Buy Ticket
              </button>
              <p className='flex items-center gap-2 text-white'>
                <StarIcon className='w-4 h-4 text-primary fill-primary' />
                {movies.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>):(<div>Now Movies is Available</div>)
  );
};

export default YouAsloLike;
