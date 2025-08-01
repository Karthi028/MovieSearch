import instance from "../../instances/movieinstance";

const movieloader1 = async ()=>{
    try {
        const response = await instance.get('/?apikey=90f0d45e&page=1&s=spider')
        return response.data;
        
    } catch (error) {
        return [];
    }
}

export default movieloader1;