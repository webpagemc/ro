//tenemos un array con los datos de las bebidas
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

//tenemos un array vacio que funcionara como carrito
const cart = [];

//tenemos la funcion addToCart que pushea una bebida al carrito
const addToCart = (drink) => {

    cart.push(drink)
    
}

//usamos map() para recorrer el array de bebidas y plasmar los datos de cada bebida en el frontend ( HTML ).
data.map( (element)=>{

    //selecciono el body
    const body = document.querySelector("body");

    //creo un contenedor(div)
    const container = document.createElement("div");

    //establecer class "drinks" a container
    container.setAttribute("class","drinks")

    //creo elementos que contendran las propiedades
    let title = document.createElement("h3");
    let price = document.createElement("p");
    let type = document.createElement("p");
    let button = document.createElement("button")

    //defino las propiedades
    title.innerHTML = element.producto;
    price.innerHTML = `$${element.precio}`;
    type.innerHTML = element.tipo;
    button.innerHTML = "Agregar al carrito"

    //establecer class "addCart-btn" al boton creado
    button.setAttribute("class","addCart-btn")

    //convertimos el elemento a STRING para que pueda ser pasado como parametro en la funcion addToCart()
    const stringifyElement = JSON.stringify(element)

    // Establecer el atributo "onclick" y la funcion addToCart() para que al hacer click en el boton
    // se agregue el elemento al carrito.
    button.setAttribute("onclick", `addToCart(${ stringifyElement })`);
 
    //insertando las propiedades al contenedor
    container.appendChild(title);
    container.appendChild(price);
    container.appendChild(type);
    container.appendChild(button);

    //inserto el contenedor en el body
    body.appendChild(container)

});



