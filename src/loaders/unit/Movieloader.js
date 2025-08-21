import instance from "../../instances/movieinstance";

const movieloader = async ()=>{
    try {
        const response = await instance.get('/?apikey=90f0d45e&page=1&s=avengers')
        localStorage.setItem("Sample",JSON.stringify(response.data));
        return response.data;
        
    } catch (error) {
        return [];
    }
}

export default movieloader;