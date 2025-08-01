import instance from "../../instances/movieinstance";

const movieloader = async ()=>{
    try {
        const response = await instance.get('/?apikey=488f0688&page=1&s=avengers')
        return response.data;
        
    } catch (error) {
        return [];
    }
}

export default movieloader;