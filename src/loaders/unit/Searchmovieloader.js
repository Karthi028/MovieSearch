import instance from "../../instances/movieinstance";

const Searchmovieloder = async () => {

    try {
        const gern = localStorage.getItem('Gern');
        const moviename = localStorage.getItem('Name');
        const response = await instance.get(`/?apikey=90f0d45e&s=${moviename}&type=${gern}` || `/?apikey=90f0d45e&s=${moviename}`)
        const Data = response.data;
        const Totallist = +(Data.totalResults);
        const No = Math.ceil(Totallist / 10);
        let Arry = [];

        if (No >= 2) {

            for (let i = 1; i <= 2; i++) {
                const allData = await instance.get(`/?apikey=90f0d45e&s=${moviename}&type=${gern}&page=${i}` || `/?apikey=90f0d45e&s=${moviename}&page=${i}`);
                Arry.push(allData.data)
            };
            if (Data.Response == "True") {
                return Arry;
            } else {
                return [];
            }

        }else{
            return response.data
        }

        
    } catch (error) {
        return [];

    }
}

export default Searchmovieloder;