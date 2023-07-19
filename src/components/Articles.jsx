import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getArticles } from "../utils/api";
import Loading from "./Loading";
import ArticlesCard from "./ArticlesCard";


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
   getArticles().then((articles) => {
        console.log(articles);
      setArticles(articles);
      setLoading(false)
    })
    .catch((error)=> {
        console.log("Loading error", error)
    setLoading(false)
    })

  }, []);

  if(isLoading){
    return <Loading/> 
}

  return (
    <div className="body">
      <h1>Articles</h1>
      {articles.map((article) => {
         return <ArticlesCard article={article} key={article.article_id} />
      })}
</div>         
   
  )
}

export default Articles;
