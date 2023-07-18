import React, { useEffect,useState,useContext } from "react"
import {useParams} from "react-router-dom"
import axios from 'axios'
import { getArticles } from "../utils/api"

const Articles = () => {
   
    const[articles, setArticles] = useState([])


useEffect(() => {
   getArticles().then((articles) => {
   setArticles(articles)
   })
},[])



    return (
       <div>
        <h1>Articles</h1>
       {articles.map((article) => {
        return (
            <div key={article.article_id}> 
            <h2>
             {article.title}
            <p>{article.topic}</p>
            <p>{article.author}</p>
            <p> {article.body}</p>
            <p>{article.created_at}</p>
            <p> {article.votes}</p>
             <img src={article.article_img_url} alt="Article Image" />
             

            </h2> </div>
        )
       }           
        ) }
        </div> 
        )
    }

    export default Articles