import instance from "../../instances/movieinstance";

const Searchmovieloder = async () => {

    try {
        const gern = localStorage.getItem('Gern')? localStorage.getItem('Gern') : null;
        const year = localStorage.getItem('Year')? localStorage.getItem('Year') : null;
        const moviename = localStorage.getItem('Name');
        const response = await instance.get(`/?apikey=90f0d45e&s=${moviename}&type=${gern}&y=${year}`)
        const Data = response.data;
        const Totallist = +(Data.totalResults);
        const No = Math.ceil(Totallist / 10);
        let Arry = [];

        if (No >= 2) {

            for (let i = 1; i <= 2; i++) {
                const allData = await instance.get(`/?apikey=90f0d45e&s=${moviename}&type=${gern}&y=${year}&page=${i}`);
                Arry.push(allData.data)
            };
            if (Data.Response == "True") {
                localStorage.setItem('Pages',JSON.stringify(Arry));
                return Arry;
            } else {
                return [];
            }

        }else{
            localStorage.setItem('Pages',JSON.stringify(response.data));
            console.log(response.data);
            return response.data
        }

        
    } catch (error) {
        return [];

    }
}

export default Searchmovieloder;