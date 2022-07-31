let baseURL = "https://graphqlzero.almansi.me"

const apiCall = (method, query) => {
    return fetch(baseURL, {
        "method": method,
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify({
            query: query
        })
    })
}

apiCall("post", `{
    user(id:1){
        id
        name
    }
}`).then(res => res.json()).then(console.log)