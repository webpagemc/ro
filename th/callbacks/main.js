//tipos de datos

//entero = 45
//flotantes = 45.5
//booleanos = true/false
//arrays = [45,6,"hola"]
//objetos = {nombre:"Mauro", edad:"45"}
//strings = "esto es un texto"

//Condicionales
//...

const app = {

    get:(ruta, callback) => {

        console.log(`La ruta es ${ruta}`);

        const req = {

            nombreDeUsuario:()=>{console.log("Obtiene el nombre de usuario")},
            edadDelUsuario:()=>{console.log("Obtiene la edad del usuario")}
        }

        const res = {

            send:()=>{console.log("Mostrar respuesta")},
            json:()=>{console.log("Muestra en form. json")}

        }
    
        callback(req, res);
    
    }
}

app.get("/",(req, res)=>{

    res.json()

})



