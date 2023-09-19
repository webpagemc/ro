//----------LOS OBJETOS---------//

//Los objetos en JavaScript son contenedores que almacenan 
//datos y funciones relacionadas utilizando un sistema de clave-valor.
//Los objetos tienen propiedades las cuales pueden ser un valor, dicho valor puede
//ser un numero, un "string", un array[] o incluso otro objeto.

//---------Sintaxis y Ejemplo---------//

const jugador = {
    id:1,
    nombre:"Lionel Messi",
    edad:35,
    posicion:"Delantero", 
    nacionalidad:"Argentina", 
    equipos:[
        "FC Barcelona",
        "Paris Saint Germain (PSG)", 
        "Inter de Miami"
    ],
    competiciones:{
        mundiales:1, 
        copasAmerica:1, 
        championsLeague:4, 
        copasLibertadores:0
    }
} ;

// console.log(jugador)

//----------Llamar solo a la propiedad de un objeto---------//

//Para llamar solo a una de las propiedades y no al objeto 
//completo debemos declararlo de la siguiente forma

//Objeto.Propiedad

//----------Sintaxis y ejemplo---------//

// console.log( jugador.nacionalidad )

//----------Llamar a la propiedad de una propiedad---------//

// console.log( jugador.competiciones.mundiales )

//----------La destructuracion { }---------//

//Consiste en llamar a las propiedades y 
//asignarles una variable con el nombre de dicha propiedad.

const { nombre, edad, nacionalidad } = jugador ;

// console.log(nombre)
// console.log(edad)
// console.log(nacionalidad)

//----------LOS METODOS---------//

//Los metodos son funciones que incorporamos como propiedad de un objeto, 
//de manera que solo podremos llamarlas y ejecutarlas a traves de los mismos.

//----------Sintaxis y ejemplo---------//

//declaramos un objeto llamado productAdmin, 
//el cual tiene 2 propiedades

//* productos: Es un array que contendra productos
//* es un metodo que agrega un producto al array
//* es un metodo que muestra el array en consola

const productAdmin = {

    productos:[],
    agregarProducto:(newProduct)=>{

        productAdmin.productos.push(newProduct)
        
    },
    listarProductos: () => { console.log( productAdmin.productos ) }

} ;

//Para ejecutar un metodo lo hacemos de la siguiente manera:

/*

productAdmin.agregarProducto({
    id:1, 
    nombre:"Celular"
});

productAdmin.listarProductos();

*/

//Cabe aclarar que tambien podemos usar destructuracion{} con los metodos
const { listarProductos } = productAdmin

// listarProductos()


//----------LAS CLASES--------//

//Basicamente son generadores de objetos, nosotros tenemos , por decirlo de alguna manera, 
//el "plano" de un objeto. Por lo que cada objeto que creemos con una clase 
//tendra metodos y propedades predeterminadas

//----------Sintaxis y ejemplo---------//

//Las clases pueden tener un "constructor", el mismo funciona como un espacio en el que 
//podemos establecer parametros al momento de crear un objeto usando la clase.

class Alumno {

    constructor(nombre, edad) {

        this.nombre = nombre;
        this.edad = edad;

    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }

    bardear(insulto) {
        console.log(`¿Qué haces ${insulto}?`);
        this.saludar()
    }
}

const alumno1 = new Alumno("Carlos", 12);

alumno1.bardear("gato");





