import axios from  'axios';
 



export const fetchCases = async  (country) => {
    const {data} = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}/?yesterday=${true}`
    )
    return data;
};

