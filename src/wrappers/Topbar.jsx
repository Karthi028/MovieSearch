import { useNavigate } from "react-router";
import { useState } from "react"

const Rendering = () => {

    const [gern,setgern] = useState('')
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

    return <div className="flex flex-row justify-start items-center relative">
        <form className="flex items-center gap-2" onSubmit={handleForm}>
            <input id="Moviename" type="text" placeholder="Search by Movie name..." name='text'
                className="hover:border text-sm p-3 rounded-2xl shadow-2xl ml-3" required
                onChange={(e) => {
     
                    localStorage.setItem("Name", e.target.value);
                }} />

            <select className="p-1 rounded-2xl w-[30%] h-11 text-sm italic font-semibold text-gray-400 shadow-2xl hover:border-red-300 hover:border"
                onChange={(e) => {
                    setgern(e.target.value);
                    localStorage.setItem("Gern", e.target.value);
                }} value={localStorage.getItem("Gern")}>

                <option value=''></option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>

            </select>

            <button type="submit"><img src="/search.png" className="size-10 w-12 rounded shadow-xl p-1 transition-transform duration-100 hover:scale-125 hover:border text-cyan-300" /></button>

        </form>
        <button onClick={() => {
            const Moviename = document.getElementById('Moviename')
            Moviename.value = '';
            const delayloader = document.getElementById('Delaymsg');
            delayloader.classList.add('hidden');
            navigate('/');
            localStorage.setItem('Name', '');


        }}><img src="/home.png" className="size-7 sm:size-10 sm:w-12 rounded shadow-xl p-1 absolute right-3 top-15 sm:top-1 transition-transform duration-100 hover:scale-125 hover:border text-cyan-300" /></button>
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




