let baseURL = "https://jsonplaceholder.typicode.com/"

const apiCall = (endpoint, method, data) => {
    let uri = baseURL + endpoint
    return fetch(uri, {
            method: method,
            headers: {
                "Content-Type": "application/json;"
            },
            body: data ? data : null
        }).then(response => response.json())
        .then(json => json)
        .catch(error => error)
}

//apiCall("posts", "GET").then(console.log)

const apiGET = async (resource, id) => {
    let endpoint = id ? `${resource}/${id}` : resource
    let result = await apiCall(endpoint, "GET")
    console.log(result)
    //document.getElementById("post").innerHTML(result)
}

const apiPOST = async (resource, data) => {
    let endpoint = resource
    console.log(await apiCall(endpoint, "POST", data))
}

const apiPUT = async (resource, id, data) => {
    let endpoint = `${resource}/${id}`
    console.log(await apiCall(endpoint, "PUT", data))
}

const apiDELETE = async (resource, id) => {
    let endpoint = `${resource}/${id}`
    console.log(await apiCall(endpoint, "DELETE"))
}

apiGET("posts")
apiGET("posts", 67)

apiPOST("posts", {
    "id": 123,
    "title": "teste",
    "body": "testando"
})

apiPUT("posts", 44, {
    "userId": 124,
    "title": "teste",
    "body": "testando"
})

apiDELETE("posts", 35)
