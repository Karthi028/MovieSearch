import axios from "axios";

const baseURL = 'http://www.omdbapi.com/?apikey=90f0d45e&';

const instance = axios.create({
    baseURL,
    headers:{
        'Content-Type':'applicaton/json',
        'Accept':'application/json'

    },
    timeout:5000
});

export default instance;