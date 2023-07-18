import React, { useEffect,useState,useContext } from "react"
import axios from 'axios'

const Articles = () => {
    const[articles, setArticles] = useState([])
}

useEffect(() => {
    axios.get("")
    .then(({res})=> {
       return res.json();
    })
    .then((data) => {
        setArticles(data.articles)
    })
})


    return (
        <div className="body">
                    </div> )