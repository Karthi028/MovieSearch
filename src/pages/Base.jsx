import { useLoaderData, useNavigate } from "react-router";

const Base = () => {

    const data = useLoaderData();
    const navigate = useNavigate();

    if (data && data.Response === 'False') {
        return <div className='flex flex-col justify-center items-center'>
            <p className='text-lg font-semibold'>No Results For Current Movie!!!!</p>
            <h1 className='text-sm font-semibold text-gray-400 mb-10'>Try Entering some other Movies!!!</h1>
        </div>
    }
    const Moviess = data.Search;
    const movies = Moviess.map(Movie => { return { ...Movie, ratings: (Math.floor(Math.random() * 5) + 1) } })

    const Movies = movies.map((movie, index) => {
        return <div key={index} onClick={() => {
            localStorage.setItem("movie", JSON.stringify(movie));
            navigate('/Detailed');
        }} className="w-55 h-80 mb-10 hover:scale-95 transition-transform" >
            <img src={movie.Poster} className=" size-[100%] rounded-lg" />
            <div className='flex justify-between items-end'>
                <div>
                    <p className="text-xs font-medium mt-1">{movie.Title}</p>
                    <p className="text-xs font-light mt-1">{movie.Year}<span className="text-xs text-gray-400 font-light mt-1 ml-1">{movie.Type}</span></p>
                </div>
                <div className='flex gap-0.5'>
                    {Array.from({ length: +movie.ratings }).map((_, index) => (
                        <span key={index}><img width={13} src="/Star.png" alt="star" /></span>
                    ))}
                </div>
            </div>
        </div>
    });
    return <div className="p-5">
        <h1 className="text-[10px] text-gray-300 font-semibold pl-4 mt-2">Home page!!!!!</h1>
        <div className="flex flex-col items-center">
            <h1 className="text-center italic font-semibold text-xl text-lime-500 border-[0.5px] p-1 rounded-2xl shadow-2xl
            w-40 sm:w-50 mt-2 mb-2">Popular Movies</h1>
            <div className="flex flex-row gap-3 flex-wrap justify-around p-2"  >{Movies}</div>
        </div>
    </div>
}

export default Base;