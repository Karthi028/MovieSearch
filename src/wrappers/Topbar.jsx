import { useNavigate } from "react-router";
import { use, useState } from "react"

const Rendering = () => {

    const [gern,setgern] = useState('');
    const [year,setyear] = useState('');
    const [movie,setmovie] = useState('');
    const navigate = useNavigate();
    const handleForm = async (event) => {
        event.preventDefault();
        const delayloader = document.getElementById('Delaymsg');
        delayloader.classList.remove('hidden');
        navigate('/Searchmoviepage');
        setTimeout(() => {
            delayloader.classList.add('hidden');
        }, 4000);

    };

    const Year = localStorage.getItem('Year')
    const name = localStorage.getItem('Name');

    return <div className="flex flex-row justify-start items-center relative">
        <form className="flex flex-wrap items-center gap-2 w-[90%] pl-3 pr-3" onSubmit={handleForm}>
            <input id="Moviename" type="text" placeholder="Search by Movie name..." value={name} name='text'
                className="border border-cyan-200 text-sm p-3 rounded-2xl shadow-2xl" required
                onChange={(e) => {
                    localStorage.setItem("Name", e.target.value);
                    setmovie(e.target.value);
                }} />

            <select className="p-1 rounded-2xl w-20 h-11 text-sm italic font-semibold text-gray-400 shadow-2xl hover:border-red-300 hover:border"
                onChange={(e) => {
                    setgern(e.target.value);
                    localStorage.setItem("Gern", e.target.value);
                }} value={localStorage.getItem("Gern")|| ''}>

                <option value=''></option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>

            </select>

            <input id="years" value={Year} onChange={(e)=>{
                localStorage.setItem('Year',e.target.value)
                setyear(e.target.value);

                }} className="w-20 text-sm p-3 rounded-2xl shadow-2xl ml-1" type="number" placeholder="Year..."/>

            <button type="submit"><img src="/search.png" className="size-10 w-10 rounded shadow-xl p-1 transition-transform duration-100 hover:scale-115 hover:border text-cyan-300" /></button>

        </form>
        <button onClick={() => {
            const Moviename = document.getElementById('Moviename');
            Moviename.value = '';
            const delayloader = document.getElementById('Delaymsg');
            setyear('');
            delayloader.classList.add('hidden');
            navigate('/');
            localStorage.setItem('Name','');
            localStorage.removeItem('Pages');
            localStorage.removeItem('movie');
            localStorage.setItem("Year",'');



        }}><img src="/Homess.png" className="size-7 sm:size-10 sm:w-10 rounded shadow-xl p-1 absolute right-3 top-0 sm:top-1 transition-transform duration-100 hover:scale-115 hover:border text-cyan-300" /></button>
    </div>
};

const hocWithLoader = (WrappedComponent) => {

    return function loader() {
        return (
            <div>
                <WrappedComponent />
                <h1 id="Delaymsg" className="hidden text-xs text-red-400 font-semibold ml-4 mt-1">Loading Movie Details please wait...</h1>
            </div>
        )
    }

};

const WithLoader = hocWithLoader(Rendering);

export default WithLoader;




