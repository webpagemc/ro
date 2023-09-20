//SWITCH

//Es muy similar a if, ya que consiste en analizar el valor de una variable 
//y en caso de que sea un determinado valor ejecutara un determinado codigo

//Sintaxis y ejemplo:

usuario = {
    nombre:"Carlos",
    role: "asd"
}

const { role } = usuario

switch (role){

    case "youtuber":
    console.log(true)
    break;
    
    case "visitante":
    console.log(false)
    break;

    default:
    throw new Error("Error de usuario");
    break;
};