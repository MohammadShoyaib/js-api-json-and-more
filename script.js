
function jsonClick(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}

function jsonClickk(){
    const Url = 'https://jsonplaceholder.typicode.com/todos/1'

    fetch(Url)
    .then(response => response.json())
    .then(json => document.write(json))
}