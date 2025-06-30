import CommentCard from "./CommentCard";
import { deleteComment } from "../App";

function CommentList ({comments, setComments, currentUser}){

  const handleDelete = (comment_id) => {
    deleteComment(comment_id)
    .then(() => {
      setComments((currentComments) => currentComments.filter
      ((comment) => comment.comment_id !== comment_id))
    })
     .catch((err)=> {  
    })
  }
  return (
    <ul>
       {comments.map((comments) => (
        <CommentCard 
          key={comments.comment_id} 
          comments={comments} 
          onDelete= {handleDelete}
          currentUser={currentUser}/>
       ))}
    </ul>
  );
};

export default CommentList;