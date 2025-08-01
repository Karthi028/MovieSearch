import instance from "../../instances/movieinstance";

const movieloader = async ()=>{
    try {
        const response = await instance.get('/?apikey=90f0d45e&page=1&s=avengers')
        return response.data;
        
    } catch (error) {
        return [];
    }
}

export default movieloader;