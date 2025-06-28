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

export function getCommentsByArticleId(article_id) {
  return fetch(`${baseUrl}/api/articles/${article_id}/comments`)
    .then((res) => {
        if (!res.ok) {
            return Promise.reject({status: res.status,msg: "Failed to fetch articles",});
        }
        return res.json();
    })
    .then (({comments})=> {
        return comments 
    })
}

export function patchVotes(article_id, voteChange) {
  return fetch(`${baseUrl}/api/articles/${article_id}`,{
    method: "PATCH",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        inc_votes: voteChange
    }),
})
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