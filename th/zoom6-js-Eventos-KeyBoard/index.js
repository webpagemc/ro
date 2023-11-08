

const verifyKeyboard = (tecla, callback) => {

    window.addEventListener("keydown", (event) => {

        if(event.key.toLocaleLowerCase() == tecla.toLocaleLowerCase()){ callback() }

    })

}


verifyKeyboard("Enter", ()=>{

    console.log("Se apreto W")

})

verifyKeyboard("s", ()=>{

    console.log("Se apreto S")

})

verifyKeyboard("a", ()=>{

    console.log("Se apreto A")

})

verifyKeyboard("d", ()=>{

    console.log("Se apreto D")

})

/*
Enunciado del Ejercicio:

Crea una página HTML con un cuadro de texto (<input>) y un elemento <div>. Cuando el usuario escriba en el cuadro de texto y presione la tecla "Enter", se debe agregar un nuevo elemento de lista (<li>) al <div> con el contenido del cuadro de texto. Además, borra el contenido del cuadro de texto después de agregar el elemento a la lista.

Asegúrate de que el evento se active al presionar la tecla "Enter" (puedes utilizar el evento keydown para verificar si la tecla presionada es "Enter" con e.key). El nuevo elemento de lista debe ser creado dinámicamente utilizando document.createElement, y luego se debe agregar al <div> utilizando appendChild. El contenido del cuadro de texto se puede acceder y borrar utilizando inputElement.value y inputElement.value = '', respectivamente.

¡Espero que este enunciado te sea útil para crear tu ejercicio!
 */