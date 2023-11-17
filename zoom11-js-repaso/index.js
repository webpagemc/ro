//TIPOS DE DATOS

const oracion = "Hola a todos"; //STRING
const numero = 23; //NUMBER
const array = [ 2, 5, 7, 10 ]; //ARRAY
const boleano = false // true  //BOLLEANS

const persona = {
    nombre:"Carlos",
    edad:20,
    acciones:{

        hablar: (oracion)=>{

            console.log(oracion);
    
        },
        bardear: (droga)=>{

            if(droga == "cannabis"){

                console.log("*Bardeando tranqui")

            }
            else if (droga == "cocaina"){

                console.log("*Bardeando groso")

            }
            else{
                console.log("*Bardeando")
            }

        }
    }} //OBJECTS

//FUNCIONES (LAS FUNCIONES NO ENTRAN EN LA CATEGORIA DE TIPO DE DATO )

const sumar = (num,num2) => {

    const res = num + num2;
    return res;

}

//El metodo de array .map()

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


/*

data.map((element)=>{

    if(element.precio >= 5000){
        console.log(`${element.producto} esta re caro`)
    }else{
        console.log(`${element.producto} es barato`)
    }

})
*/

const rodri = " aklas;ld'alkdn'lsdknFA'LSNFJP'OFJQ'WOIehf'oiHF'lwefh'lskdFJA'LSDKFJ'sldfj'sldkFJ"

console.log(`Hola ${rodri} `)







