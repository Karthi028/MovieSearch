import { useLoaderData, useNavigate } from "react-router";

const Base1 = () => {

  const navigate = useNavigate();
  const data = useLoaderData();

  if (!Array.isArray(data) || data.length === 0) {
    return <div className='flex flex-col justify-center items-center'>
      <p className='text-lg font-semibold'>Unable to Retrive Data from Database</p>
      <h1 className='text-sm font-semibold text-gray-400'>Try after some time!!!</h1>
      <p className="text-[8px] text-red-300 font-semibold">Daily Search Limit Reached</p>
    </div>
  }

  const movies = data.Search;
  const Movies = movies.map((movie, index) => {
    return <div key={index} className="w-55 h-80 mb-5" onClick={() => {
      localStorage.setItem("movie", JSON.stringify(movie));
      navigate('/Detailed');
    }} >
      <img src={movie.Poster} className=" size-[100%] rounded-lg" />
      <p className="text-xs font-light mt-1">{movie.Title}</p>
    </div>
  });

  return <>
    <h1 className="text-center italic font-semibold text-xl text-lime-500 border-[0.5px] p-1 rounded-2xl shadow-2xl  w-40 sm:w-[20%] sm:ml-[40%] mt-2 mb-2">Popular Movies</h1>
    <div className="flex flex-row gap-3 flex-wrap justify-around p-2">{Movies}</div>
    <div className="flex justify-center gap-1">
      <button className="border-1 p-[0.5px] pr-2 pl-2 rounded-full transition-transform duration-100 hover:scale-110  hover:bg-amber-400 hover:text-white font-bold" onClick={() => navigate('/')}>1</button>
      <button className="border-1 p-[0.5px] pr-2 pl-2 rounded-full transition-transform duration-100 hover:scale-110 hover:bg-amber-400 hover:text-white font-bold" onClick={() => navigate('/Base1')}>2</button>
    </div>
  </>
}

export default Base1;