const data = [
    {
        id:1, 
        producto:"Jhony Walker Red Label 750ml",
        precio:9000,
        tipo:"Whiskey"
    },
    {
        id:2,
        producto:"Dada 750ml",
        precio:5000,
        tipo:"Vino"
    },
    {
        id:3,
        producto:"Vino Toro 500ml",
        precio:800,
        tipo:"Vino"
    },
    {
        id:4,
        producto:"Fernet Branca 750ml",
        precio:3500,
        tipo:"Fernet"
    },
    {
        id:5,
        producto:"Cerveza BRAMHA",
        precio:1000,
        tipo:"Cerveza"
    }
]

data.map((element)=>{

    //selecciono el body
    const body = document.querySelector("body");

    //creo un contenedor(div)
    const container = document.createElement("div");

    container.style.backgroundColor = "rgb(208, 136, 136)"
    container.style.width = "50%"

    //creo elementos que contendran las propiedades
    let title = document.createElement("h3");
    let price = document.createElement("p");
    let type = document.createElement("p");

    title.style.fontSize = "40px"
    title.style.fontFamily = "Gill Sans"
    price.style.color = "green"

    //defino las propiedades
    title.innerHTML = element.producto;
    price.innerHTML = `$${element.precio}`;
    type.innerHTML = element.tipo;

    //insertando las propiedades al contenedor
    container.appendChild(title);
    container.appendChild(price);
    container.appendChild(type);

    //inserto el contenedor en el body
    body.appendChild(container)

});






