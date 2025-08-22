import instance from "../../instances/movieinstance";

const Searchmovieloder = async () => {

    try {
        const Pages = localStorage.getItem('Pages');
        if (Pages) {
            return JSON.parse(Pages);
        } else {
            const gern = localStorage.getItem('Gern') ? localStorage.getItem('Gern') : null;
            const year = localStorage.getItem('Year') ? localStorage.getItem('Year') : null;
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
                    const modifieddata = Arry.map(results => {
                        const newSearchArry = results.Search.map(movie => {
                            return { ...movie, ratings: (Math.floor(Math.random() * 5) + 1) };
                        })

                        return { ...results, Search: newSearchArry }
                    });
                    localStorage.setItem('Pages', JSON.stringify(modifieddata));
                    return modifieddata;
                } else {
                    return [];
                }

            } else {
                const respo = response.data;
                const modifiedArry = respo.Search.map(movie => {
                    return { ...movie, ratings: (Math.floor(Math.random() * 5) + 1) };
                });
                const NewResponse = { Search: modifiedArry, totalResults: modifiedArry.length, Response: 'True' };
                localStorage.setItem('Pages', JSON.stringify(NewResponse));
                return NewResponse;
            }

        }
    } catch (error) {
        return [];

    }
}

export default Searchmovieloder;