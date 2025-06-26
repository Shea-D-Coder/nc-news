import {useState, useEffect} from "react"
import { getArticleById } from "../App";
import ArticleContent from "./ArticleContent";
import { useParams } from "react-router-dom";

function ArticlePage (){
  const {article_id} = useParams()
  const [ article, setArticle ] = useState([])

   useEffect(() => {
          getArticleById(article_id)
          .then((article) => {
              setArticle(article)
              
          })  
      }, [article_id])

  return (
    <section>
      <ArticleContent article={article}/>
    </section>
  );
};

export default ArticlePage;