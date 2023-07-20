import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import { getArticles } from "../utils/api";
import Loading from "./Loading";
import ArticlesCard from "./ArticlesCard";



const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
   getArticles().then((articles) => {
      setArticles(articles);
      setLoading(false)
    })
    .catch((error)=> {
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
        return (
        <div key={article.article_id}>
          <ArticlesCard article={article} /> 
         <Link to={`/articles/${article.article_id}`}>Continue reading...</Link>
         </div>
        )
      })}
</div>         
   
  )
}

export default Articles;
