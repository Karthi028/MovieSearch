import instance from "../../instances/movieinstance";

const Searchmovieloder = async()=>{

    try {
        const gern = localStorage.getItem('Gern');
        const moviename = localStorage.getItem('Name');
        const response = await instance.get(`/?apikey=488f0688&s=${moviename}&type=${gern}`||`/?apikey=488f0688&s=${moviename}`)
        const Data = response.data;
        const Totallist = +(Data.totalResults);
        const No = Math.round(Totallist/10);
        
        let Arry = [];

        for(let i=1;i<=No;i++){

          const allData =  await instance.get(`/?apikey=488f0688&s=${moviename}&type=${gern}&page=${i}`||`/?apikey=488f0688&s=${moviename}&page=${i}`);
          Arry.push(allData.data)
        };
        console.log(Arry);
        
        if(Data.Response == "True"){
            return Arry;
        }else{
            return '';
        }

        
    } catch (error) {
        return [];
        
    }
}

export default Searchmovieloder;