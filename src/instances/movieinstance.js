import axios from "axios";


const baseURL = "https://www.omdbapi.com"

const instance = axios.create({
    baseURL,
    headers:{
        'Content-Type':'applicaton/json',
        'Accept':'application/json'
    },
    timeout:5000
});

export default instance;