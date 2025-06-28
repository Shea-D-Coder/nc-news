import CommentCard from "./CommentCard";

function CommentList ({comments, setComments}){
  return (
    <ul>
       {comments.map((comments) => (
        <CommentCard key={comments.comment_id} comments={comments} setComments={setComments}/>
       ))}
    </ul>
  );
};

export default CommentList;