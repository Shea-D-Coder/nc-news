import { Link } from "react-router-dom";

function ArticleCard ({article}){
  const {
    article_id,
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
      <Link to={`/articles/${article_id}`}>
      {article_img_url ? (
        <img src={article_img_url} alt={`image of ${title}`}/>
      ) : (
        <p>image not found</p>
      )}
      </Link>
    <h3>{title}</h3>
    <p> <b>By:</b> {author}</p>
    <p> <b>Topic:</b> {topic}</p>
    <p> <b>Votes:</b> {votes}</p>
    <p> <b>Comments:</b> {comment_count}</p>
    <p> <b>Published:</b> {new Date(created_at).toLocaleDateString()}</p>
    </li>
  );
};

export default ArticleCard;