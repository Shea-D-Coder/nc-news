import { useState } from "react";
import {postComment} from "../App"

function CommentAdder ({article_id, setComments}){
  const [body, setBody] = useState("")
  const [error, setError] = useState(null)
  const [isPosting, setIsPosting] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const username = "cooljmessy"
    setIsPosting(true)
    setError(null)

    postComment(article_id, username, body)
    .then((newComment) => {
      setComments((currentComments) => [newComment, ...currentComments])
      setBody("")
      setIsPosting(false)
    })
    .catch((err)=> {
      setError("Failed to post comment")
      setIsPosting(false)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
          required
          value = {body}
          onChange={(event) => setBody(event.target.value)}
        />
      <button type= "submit" disabled= {isPosting}>
        {isPosting ? "Posting" : "Post Comment"}
      </button>
    </form> 
  );
};

export default CommentAdder;