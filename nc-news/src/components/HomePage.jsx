import { useEffect, useState } from "react";
import { getArticles } from "../App";
import ArticleList from "./ArticleList";

function Homepage() {
    const [ articles, setArticles ] = useState([])

    useEffect(() => {
        getArticles()
        .then((articles) => {
            setArticles(articles)
            
        })  
    }, [])

    return (
    <div>
        <ArticleList articles={articles}/>
    </div>
    )
}

export default Homepage