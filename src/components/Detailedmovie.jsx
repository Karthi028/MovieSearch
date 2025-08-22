import { useLoaderData } from "react-router";

const Detailedmovie = () => {

    const Detmovie = useLoaderData();
    console.log(Detmovie);
    const ratings = Detmovie.Ratings;
    const rate = ratings.map((rate, index) => {
        return <div key={index}>
            <p className="text-sm text-gray-400">Source: {rate.Source}</p>
            <p className="text-xs font-semibold">Value: <span className="text-red-300 font-bold">{rate.Value}</span></p>
        </div>
    })

    return (
        <div className="p-3 relative">
            <div className="flex flex-col sm:flex-row justify-start gap-5">
                <img src={Detmovie.Poster} className="h-100 w-80 rounded-2xl hover:scale-105 transition-transform" />
                <div className="text-lg font-semibold">
                    <p>Title: <span className="text-2xl font-semibold text-gray-500 hover:text-amber-500">{Detmovie.Title}</span></p>
                    <p>Year: {Detmovie.Year}</p>
                    <p>Gern: {Detmovie.Genre}</p>
                    <p className="text-sm">Plot: {Detmovie.Plot}</p>
                    <p>Actors: {Detmovie.Actors}</p>
                    <div>{rate}</div>
                    <div className="relative mt-2">
                    <div className='flex gap-0.5'>
                        {Array.from({ length: 5}).map((_, index) => (
                            <img key={index} id={index} width={15}  src="/Estar.png" alt="star" onClick={(e)=>{
                                const No = e.target.id;
                                for(let i=0;i<= No;i++){
                                     const star = document.getElementById(i + 'No');
                                if(star.classList.contains('hidden')){
                                    star.classList.remove('hidden');
                                }
                                }
                            }}/>
                        ))}
                    </div>
                    <div id="Star" className='flex gap-0.5 absolute top-0'>
                        {Array.from({ length: 5}).map((_, index) => (
                            <img className="hidden" key={index} id={index + 'No'} width={15} src="/Star.png" alt="star" onClick={(e)=>{
                                const star = e.target;
                                star.classList.add('hidden')
                            }}/>
                        ))}
                    </div>
                    </div>

                </div>
            </div>
            <button onClick={()=>window.history.back()} className="absolute top-4 right-5 hover:scale-130"><img src="/back.png" width={20} alt="" /></button>
        </div>
    )
}

export default Detailedmovie;