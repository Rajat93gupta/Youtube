import axios from "axios";

const BASE_URL ="https://youtube138.p.rapidapi.com"
const options = {
    // method: 'GET',
    // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {
    
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '11d8b577f7mshacc2a26fd927c11p124333jsnd1a798efd35f',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  
  export  const FetchdatafromApi= async(url)=>{
    const {data}= await axios.get(`${BASE_URL}/${url}`,options)
    return data
  }

