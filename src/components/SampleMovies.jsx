import { useLoaderData, useNavigate } from "react-router";

const SampleMovies = () => {

    const data = useLoaderData();
    const navigate = useNavigate();
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
  return <>
    <h1 className="text-center italic font-semibold text-xl text-lime-500 border-[0.5px] p-1 rounded-2xl shadow-2xl w-[20%] ml-[40%] mt-2 mb-2">Popular Movies</h1>
        <div className="flex flex-row gap-3 flex-wrap justify-around p-2"  >{Movies}</div>
    </>
}

export default SampleMovies;