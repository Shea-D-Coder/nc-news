import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../App";
import CommentList from "./CommentList";
import CommentAdder from "./CommentAdder";

function CommentsSection ({article_id}){
  const currentUser = "cooljmessy"
  const [comments, setComments] = useState([])
  const [displayComments, setDisplayComments] = useState(false)
  
  useEffect(() => {
    getCommentsByArticleId(article_id)
    .then((comments) => {
      setComments(comments)
    })   
  }, [article_id])

  const toggleComments = () => {
    setDisplayComments((current) =>!current)
  }

  return (
    <div>
    <button onClick={toggleComments}>
      {displayComments ? "Hide Comment" : "Show Comments"}
    </button>

    {displayComments && (
      <>
      <CommentList 
        comments={comments} 
        setComments={setComments}
        currentUser={currentUser}/>
      <CommentAdder 
        article_id={article_id} 
        setComments={setComments}/>
      </>
    )}    
    </div>
  );
}

export default CommentsSection;