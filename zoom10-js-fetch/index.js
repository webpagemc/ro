fetch("https://rickandmortyapi.com/api/character")
.then( r => r.json() )
.then( (r) => {

    const characters = r.results;
    const body = document.querySelector("body");

    characters.map((p)=>{

        const elemento = document.createElement("div");
        elemento.innerHTML = p.name;
        body.appendChild(elemento);

    })

} )
.catch( e => console.log(e) ) 