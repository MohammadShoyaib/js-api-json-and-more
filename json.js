const obj = {
    name:'sanjida',
    age:20,
    skin:'white',
    address:{
        village:'baluahat',
        post:'baluahat',
        thana:'sonatola',
        zila:'Bogura'
    },
    college:'govt AHC',
    class:'12th',
    roll:101
}

const result = JSON.stringify(obj);
const reverse = JSON.parse(result);
console.log(typeof reverse);
console.log(typeof result);

const aee = {
    name:'shoyaib',
    age:21,
    isMarried: false,
    favFood: ['biriyani','polaw','doi','sweet','egg']
}

const varResult = JSON.stringify(typeof aee.favFood[2]);
// const varResult0 = JSON.stringify( aee.name);

// console.log(varResult0);
// console.log(varResult);
