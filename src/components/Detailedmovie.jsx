import { useLoaderData } from "react-router";

const Detailedmovie = () => {

    const Detmovie = useLoaderData();

    const ratings = Detmovie.Ratings;
    const rate = ratings.map((rate,index)=>{
        return<div key={index}>
        <p className="text-sm text-gray-400">Source: {rate.Source}</p>
        <p className="text-xs font-semibold">Value: <span className="text-red-300 font-bold">{rate.Value}</span></p>
        </div>
    })

    return (
        <div className="p-3">
            <div className="flex flex-col sm:flex-row justify-start gap-5">
                <img src={Detmovie.Poster} className="h-100 w-80 rounded-2xl " />
                <div className="text-lg font-semibold">
                    <p>Title: <span className="text-2xl font-semibold text-gray-500">{Detmovie.Title}</span></p>
                    <p>Year: {Detmovie.Year}</p>
                    <p>Gern: {Detmovie.Genre}</p>
                    <p className="text-sm">Plot: {Detmovie.Plot}</p>
                    <p>Actors: {Detmovie.Actors}</p>
                    <div>{rate}</div>
                </div>
            </div>
        </div>
    )
}

export default Detailedmovie;