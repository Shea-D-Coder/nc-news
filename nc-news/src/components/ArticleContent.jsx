function ArticleContent ({article}){
  const {
    article_id,
    title,
    topic,
    author,
    body,
    created_at,
    votes,
    article_img_url,
    comment_count
  } = article
  
  return (
    <li className = "card">
    <h3>{title}</h3>
     {article_img_url ? (
        <img src={article_img_url} alt={`image of ${title}`}/>
      ) : (
        <p>image not found</p>
      )}
    <p> <b>Topic:</b> {topic}</p>
    <p>  {body}</p> 
    <p> <b>by:</b> {author}</p>
    <p> <b>Published:</b> {new Date(created_at).toLocaleDateString()}</p>
    <p> <b>Votes:</b>{ votes}</p>
    <p> <b>Comments:</b> {comment_count}</p>
    </li>
  );

};

export default ArticleContent;