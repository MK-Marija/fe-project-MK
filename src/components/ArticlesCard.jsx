import React from "react";
import axios from "axios";


const ArticlesCard = ({article}) => {
    return (  
    
        <div className="article">
        <h2> {article.title}</h2>
        <p>{article.topic}</p>
        <p>{article.author}</p>
        <p> {article.body}</p>
        <p>{article.created_at}</p>
        <p> {article.votes}</p>
        <img className="img" src={article.article_img_url} alt="Article Image"/>
       </div>
      
    );
}
 
export default ArticlesCard;