function POST(){
    postURL = 'https://jsonplaceholder.typicode.com/posts'
    fetch(postURL)
    .then(res => res.json())
    .then(data => postXY(data))
}

function postXY(data){
    
    // id done
    /* const ul = document.getElementById('ul')

    for (const dat of data){
        const li = document.createElement('li')
        li.innerText = dat.id;
        ul.appendChild(li);
    } */

    // try to display the title

     /* const ul = document.getElementById('Id')
    for (const d of data){
        const li = document.createElement('li')
        li.innerText = d.title;
        ul.appendChild(li);
    }  */

    // userId
    const ul = document.getElementById('userId')
    for (const u of data){
        const li = document.createElement('li')
        li.innerText = u.userId
        ul.appendChild(li)
    }
}