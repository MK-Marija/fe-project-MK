import React from "react";
import axios from "axios";

const CommentCard = ({comment}) => {
    return ( 
        <div className="comment">
        <h2>{comment.author}</h2>
        <p>{comment.body}</p>
        <p>{comment.created_at}</p>
        <p>{comment.votes}</p>
        </div>
     );
}
 
export default CommentCard;