function CommentCard({comments}){
   const {
    body,
    votes,
    author,
    created_at
  } = comments
  return (
    <li className = "card">
      <p>{body}</p>
      <p> <b>By: </b>{author}</p>
      <p> <b>Published:</b> {new Date(created_at).toLocaleDateString()}</p>
      <p> <b>Votes:</b> {votes}</p>
    </li>
  );
};

export default CommentCard;