const baseUrl = "https://shea-d-nc-news.onrender.com"

export function getArticles() {
  return fetch(`${baseUrl}/api/articles`)
    .then((res) => {
        if (!res.ok) {
            return Promise.reject({status: res.status,msg: "Failed to fetch articles",});
        }
        return res.json();
    })
    .then (({articles})=> {
        return articles 
    })
}

export function getArticleById(article_id) {
  return fetch(`${baseUrl}/api/articles/${article_id}`)
    .then((res) => {
        if (!res.ok) {
            return Promise.reject({status: res.status,msg: "Failed to fetch articles",});
        }
        return res.json();
    })
    .then (({article})=> {
        return article 
    })
}