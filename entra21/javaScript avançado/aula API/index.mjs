console.log("Starting...")

let response = fetch("https://jsonplaceholder.typicode.com/posts/1")
console.log(response)

response
    .then((resposta) => resposta.json())
    .then((jsonObject) => console.log(jsonObject))


/*let response1 = fetch("https://jsonplaceholder.typicode.com/post1", {
    "method": "GET"
})

//console.log(response1)

response1
    .then((resposta) => resposta.json())
    .then((jsonObject) => console.log(jsonObject))

*/

let response2 = fetch("https://jsonplaceholder.typicode.com/posts", {
    "method" : "POST",
    "body" : JSON.stringify({
        "userID" : 123456,
        "title" : "Publicação de teste",
        "body" : "lorem ipsum dolor sit amet",
    }),
    "headers" : {
        "Content-Type" : "application/json"
    }

})

response2
    .then((resposta) => resposta.json())
    .then((jsonObject) => console.log(jsonObject))