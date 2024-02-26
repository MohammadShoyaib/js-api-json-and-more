function app(){
    const URL = 'https://jsonplaceholder.typicode.com/posts'

    fetch(URL)
    .then(res => res.json())
    .then(post => console.log(post))
}

// comment

function comment(){
    const commentUrl = 'https://jsonplaceholder.typicode.com/comments'
    fetch(commentUrl)
    .then(res => res.json())
    .then(comm => data(comm) )
}


function data(comm){
    console.log(comm);
}

function album(){
    albumUrl = 'https://jsonplaceholder.typicode.com/albums'
    fetch(albumUrl)
    .then(res =>res.json())
    .then(album => albumX(album) )
}

function albumX (album){
    console.log(album)
}

function todo(){
    todoUrl = 'https://jsonplaceholder.typicode.com/todos'
    fetch(todoUrl)
    .then(res => res.json())
    .then(todo =>todoX(todo) )
}

function todoX (todo){
    console.log(todo);
}