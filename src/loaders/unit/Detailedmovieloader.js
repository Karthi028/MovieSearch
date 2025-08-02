import instance from "../../instances/movieinstance";


const Detailedmovieloader = async () => {
    try {

        const movieString = localStorage.getItem('movie');
        const movie = JSON.parse(movieString);
        const id = movie.imdbID;
        const response = await instance.get(`/?apikey=90f0d45e&page=1&i=${id}`);
        console.log(response.data);
        return response.data;

    } catch (error) {
        return [];
    }
}

export default Detailedmovieloader;