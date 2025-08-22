import { useContext } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router'
import { Moviecontext } from '../App';

const SearchMovie = () => {
    const { number, setnumber } = useContext(Moviecontext);
    const load = useLoaderData();
    const local = localStorage.getItem('Pages');
    const data = local ? JSON.parse(local) : load;
    const navigate = useNavigate();

    if (data.Response === 'False' || data.length === 0 || data === null) {

        return <div className='flex flex-col justify-center items-center mt-10'>
            <p className='text-lg font-semibold'>No Results For Current Movie!!!!</p>
            <h1 className='text-sm font-semibold text-gray-400 mb-10'>Try Entering some other Movies!!!</h1>
            <Outlet />
        </div>
    }

    if (data.totalResults <= 10) {

        const movies = data.Search;
        const Rendermovie = () => {
            return movies.map((movie, index) => {
                return <div key={index} onClick={() => {
                    localStorage.setItem("movie", JSON.stringify(movie));
                    navigate('/Detailed');
                }} className="w-55 h-80 mb-15 hover:scale-95 transition-transform" >
                    <img src={movie.Poster} onError={(e) => {
                        e.target.onError = null;
                        e.target.src = '/emty2.jpg';
                    }} alt=' No Poster Available....' className=" size-[100%] rounded-lg" />
                    <div className='flex justify-between items-end'>
                        <div>
                            <p className="text-xs font-medium mt-1">{movie.Title}</p>
                            <p className="text-xs font-light mt-1">{movie.Year}<span className="text-xs text-gray-400  font-light mt-1 ml-1">{movie.Type}</span></p>
                        </div>
                        <div className='flex gap-0.5'>
                            {Array.from({ length: +movie.ratings }).map((_, index) => (
                                <span key={index}><img width={13} src="/Star.png" alt="star" /></span>
                            ))}
                        </div>
                    </div>
                </div>

            });

        }
        return <div className='p-1 mt-4'>
            <p className='p-1 rounded-xl shadow-2xl text-lg text-white border font-bold italic ml-15 mr-15 sm:w-[20%] text-center sm:ml-[40%] mb-1 bg-lime-300'>Search Results</p>
            <div className="flex flex-row gap-4 flex-wrap justify-center-safe p-5 mb-10"><Rendermovie /></div>
            <Outlet />
        </div>


    } else {

        const Length = data.length;
        const movies = data[number].Search;
        const Rendermovie = () => {

            return movies.map((movie, index) => {
                return <div key={index} onClick={() => {
                    localStorage.setItem("movie", JSON.stringify(movie));
                    navigate('/Detailed');
                }} className="w-55 h-80 mb-15 hover:scale-95 transition-transform">
                    <img src={movie.Poster} onError={(e) => {
                        e.target.onError = null;
                        e.target.src = '/emty2.jpg';
                    }} alt=' No Poster Available....' className=" size-[100%] rounded-lg" />
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

        }
        return <div className='p-1 mt-4'>
            <p className='p-1 rounded-xl shadow-2xl text-lg text-white border font-bold italic ml-15 mr-15 sm:w-[20%] text-center sm:ml-[40%] mb-1 bg-lime-300'>Search Results</p>
            <div className="flex flex-row gap-4 flex-wrap justify-around p-5 mb-10"><Rendermovie /></div>
            <div className='flex justify-center gap-2 mb-5 mt-[-20px]'>
                <button onClick={() => {
                        if (number > 0) {
                            setnumber(number - 1)
                        }
                    }}className='p-1 w-8 rounded-full shadow border-none shadow-amber-400 hover:scale-110 hover:bg-amber-500 transition-transform hover:text-white hover:font-bold'>-</button>
                <button className=' bg-yellow-300 text-white font-bold p-1 w-8 rounded-full shadow border-none'>{number}</button>
                <button onClick={() => {
                    if (number < (Length - 1))
                        setnumber(number + 1)
                }}className='p-1 rounded-full shadow border-none shadow-amber-300 w-8 hover:scale-110 hover:bg-amber-500 transition-transform hover:text-white hover:font-bold '>+</button>
            </div>

            <Outlet />
        </div>
    }
}

export default SearchMovie;