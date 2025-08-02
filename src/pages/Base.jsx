import { useLoaderData, useNavigate } from "react-router";

const Base = () => {

    const data = useLoaderData();
    const navigate = useNavigate();

    if(data && data.Response === 'False'){
        return <div className='flex flex-col justify-center items-center'>
            <p className='text-lg font-semibold'>No Results For Current Movie!!!!</p>
            <h1 className='text-sm font-semibold text-gray-400 mb-10'>Try Entering some other Movies!!!</h1>
        </div>
    }
    const movies = data.Search;
    const Movies = movies.map((movie, index) => {
        return <div key={index} onClick={() => {
            localStorage.setItem("movie", JSON.stringify(movie));
            navigate('/Detailed');
        }} className="w-55 h-80 mb-5" >
            <img src={movie.Poster} className=" size-[100%] rounded-lg" />
            <p className="text-xs font-light mt-1">{movie.Title}</p>
        </div>
    });
    return <div className="p-5">
    <h1 className="text-[10px] text-gray-300 font-semibold pl-4 mt-2">Home page!!!!!</h1>
    <h1 className="text-center italic font-semibold text-xl text-lime-500 border-[0.5px] p-1 rounded-2xl shadow-2xl
     w-40 sm:w-[20%] sm:ml-[40%] mt-2 mb-2">Popular Movies</h1>
        <div className="flex flex-row gap-3 flex-wrap justify-around p-2"  >{Movies}</div>
        <div  className="flex justify-center gap-1">
        <button className="border-1 p-[0.5px] pr-2 pl-2 rounded-full transition-transform duration-100 hover:scale-110  hover:bg-amber-400
         hover:text-white font-bold" onClick={()=>navigate('/')}>1</button>
        <button className="border-1 p-[0.5px] pr-2 pl-2 rounded-full transition-transform duration-100 hover:scale-110
         hover:bg-amber-400 hover:text-white font-bold" onClick={()=>navigate('/Base1')}>2</button>
        </div>
    </div>
}

export default Base;