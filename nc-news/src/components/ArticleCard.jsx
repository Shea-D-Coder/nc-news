function ArticleCard ({article}){
  const {
    title,
    topic,
    author,
    created_at,
    votes,
    article_img_url,
    comment_count
  } = article
  
  return (
    <li className = "card">
      
      {article_img_url ? (
        <img src={article_img_url} alt={`image of ${title}`}/>
      ) : (
        <p>image not found</p>
      )}
    <h3>{title}</h3>
    <p> <b>Author:</b> {author}</p>
    <p> <b>Topic:</b> {topic}</p>
    <p> <b>Votes:</b>{ votes}</p>
    <p> <b>Comments:</b> {comment_count}</p>
    <p> <b>Published:</b> {new Date(created_at).toLocaleDateString()}</p>
    </li>
  );
};

export default ArticleCard;