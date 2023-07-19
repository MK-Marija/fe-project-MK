import axios from "axios";



const newsApi = axios.create({
    baseURL: 'https://oneproject-mk.onrender.com/api'
  });

  export const getArticles = () => {
   return newsApi.get('/articles').then((response) => {
       return response.data.articles
   })
  }
  
 
