function users (){
    userUrl = 'https://jsonplaceholder.typicode.com/users'

    fetch(userUrl)
    .then(res => res.json())
    .then(data => userData(data) )
}


function userData(data){
    for(const user of data ){
        // name,username,id,address,email and many more in this objects
        console.log(user.website);
    }
}