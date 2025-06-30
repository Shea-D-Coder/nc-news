function CommentCard({comments, onDelete, currentUser}){
  const handleClick = () => {
    onDelete(comments.comment_id)
  }

   const {
    body,
    votes,
    author,
    created_at
  } = comments

  const allowDelete = currentUser === author

  return (
    <li className = "card">
      <p>{body}</p>
      <p> <b>By: </b>{author}</p>
      <p> <b>Published:</b> {new Date(created_at).toLocaleDateString()}</p>
      <p> <b>Votes:</b> {votes}</p>
      {allowDelete && (
      <button onClick= {handleClick}>Delete </button>
      )}
    </li>
  );
};

export default CommentCard;