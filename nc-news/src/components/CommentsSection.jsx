import CommentList from "./CommentList";

function CommentsSection ({comments, setComments}){
  return (
    <div>
    <h3>Comments</h3>
        <CommentList comments={comments} setComments={setComments}/>
    </div>
  );
}

export default CommentsSection;