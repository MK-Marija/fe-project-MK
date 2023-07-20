import React, { useEffect, useState } from "react";
import { getArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((articleInfo) => {
      setArticle(articleInfo);
      setLoading(false)

    })
    .catch((error) => {
      console.log("Can't display the selected article", error);
      setLoading(false)
    })
  }, [article_id]);

  if(isLoading){
    return <Loading/> 
}

  return (
    <div className="body">
      <h1> Article {article_id}</h1>
        <div className="single-art" key={article.article_id}> 
        <h2>{article.title}</h2>
        <p>{article.topic}</p>
        <p>{article.author}</p>
        <p>{article.body}</p>
        <p>{article.created_at}</p>
        <p>{article.votes}</p>
        <img className="img" src={article.article_img_url} alt="Article Image" />
        </div>
        </div>
       )
};

export default SingleArticle;
