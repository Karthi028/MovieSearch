import { useContext} from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router'
import { Moviecontext } from '../App';

const SearchMovie = () => {
    const { number, setnumber } = useContext(Moviecontext);
    const data = useLoaderData();
    const navigate = useNavigate();
    console.log(data);

    if(data.Response === 'False'||data.length === 0||data === null){
        return <div className='flex flex-col justify-center items-center'>
            <p className='text-lg font-semibold'>No Results For Current Movie!!!!</p>
            <h1 className='text-sm font-semibold text-gray-400 mb-10'>Try Entering some other Movies!!!</h1>
            <Outlet/>
        </div>
    }
    
    const length = data.length;
    const movies = data[number].Search;
    const Rendermovie = () => {
        
            return movies.map((movie, index) => {
                return <div key={index} onClick={() => {
                    localStorage.setItem("movie", JSON.stringify(movie));
                    navigate('/Detailed');
                }} className="w-55 h-80 mb-8" >
                    <img src={movie.Poster} onError={(e) => {
                        e.target.onError = null;
                        e.target.src = '/emty2.jpg';
                    }} alt=' No Poster Available....' className=" size-[100%] rounded-lg" />
                    <p className="text-xs font-light mt-1">{movie.Title}</p>
                </div>

            });
        
    }
    return <div className='p-1 mt-4'>
        <p className='p-1 rounded-xl shadow-2xl text-lg text-white border font-bold italic ml-30 mr-30 sm:w-[20%] text-center sm:ml-[40%] mb-1 bg-lime-300'>Search Results</p>
        <div className="flex flex-row gap-3 flex-wrap justify-around p-2 mb-10"><Rendermovie /></div>
        <div className='flex justify-center gap-2 mb-5 mt-[-20px]'>
            <button className='p-1 w-8 rounded-full shadow border-none shadow-amber-400'
                onClick={() => {
                    if (number > 0) {
                        setnumber(number - 1)
                    }
                }}>-</button>
            <button className=' bg-yellow-300 text-white font-bold p-1 w-8 rounded-full shadow border-none '>{number}</button>
            <button onClick={() => {
                if (number < (length - 1))
                    setnumber(number + 1)
            }} className='p-1 rounded-full shadow border-none shadow-amber-300 w-8 '>+</button>
        </div>

        <Outlet />
    </div>
}

export default SearchMovie