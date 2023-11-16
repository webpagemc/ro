
//FUNCIONES ASINCRONAS
//async / await
const getData = async() => {

    const data = await fetch("https://swapi.dev/api/people");
    const people = await data.json();
    return people.results

};

const useData = async() => {

    const characters = await getData();
    console.log(characters)

}

useData();

//PROMESAS
/*
fetch("https://swapi.dev/api/people")
.then( r => r.json() )
.then( people => console.log(people) )
.catch( error => console.error(error))
*/
