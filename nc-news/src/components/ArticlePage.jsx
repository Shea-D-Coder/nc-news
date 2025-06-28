import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../App";
import ArticleContent from "./ArticleContent";
import CommentsSection from "./CommentsSection";
import VoteControl from "./VoteControl";



function ArticlePage (){
  const {article_id} = useParams()
  const [ article, setArticle ] = useState([])
  const [comments, setComments] = useState([])

   useEffect(() => {
          getArticleById(article_id)
          .then((article) => {
              setArticle(article)
              }) 
              getCommentsByArticleId(article_id)
              .then((comments) => {
                setComments(comments)
              })   
      }, [article_id])

  return (
    <div>
      <ArticleContent article={article}/>
      <VoteControl article_id={article_id} votes={article.votes}/>
      <CommentsSection article_id={article_id} comments={comments} setComments={setComments} />
    </div>
  );
};

export default ArticlePage;