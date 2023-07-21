import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'
import Home from './components/Home'
import Header from './components/Header'
import Comments from './components/Comments';

function App() {
  

  return (
    <>
     <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/articles/:article_id" element={<SingleArticle/>}/>
      {/* <Route path="/articles/:article_id/comments" element={<Comments/>}/> */}
      </Routes>
    </>
  )
}

export default App
