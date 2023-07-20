import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getComments } from "../utils/api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
      getComments(article_id)
      .then((commentsInfo) => {
       
        setComments(commentsInfo);
        setLoading(false);
      })
      .catch((error) => {
    
        setLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <Loading />;
  }
  
  if(comments.length === 0) {
    return <h2>There are no comments for this article. Be the first one to comment!</h2>
  }
  return (
    <div className="body">
      {comments.map((comment) => {
        return (
        <CommentCard comment={comment} key={comment.comment_id} />
        )
    })}
    </div>
  )
}

export default Comments;
