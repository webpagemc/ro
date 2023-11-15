
const form =  document.getElementById("formId");

const inpName =  document.getElementById("formId-username");
const inpPass =  document.getElementById("formId-password");

const body = document.querySelector("body");

form.addEventListener("submit", (event)=>{

    event.preventDefault();

    console.log(event)

    console.log(inpName.value);
    console.log(inpPass.value);

    const newDiv = document.createElement("div");

    newDiv.innerHTML = `<h1>El nombre del usuario es ${inpName.value}</h1>`

    body.appendChild(newDiv);

})

/**
 * Ejercicio de JavaScript
 * 
 * Crea una página HTML con los siguientes elementos:
 * - Un cuadro de texto (<input>) con un id "textInput".
 * - Un botón (<button>) con un id "addButton".
 * - Un elemento <div> con un id "listContainer".
 * 
 * Cuando el usuario escriba en el cuadro de texto y haga clic en el botón, se debe realizar lo siguiente:
 * - Crear un nuevo elemento de lista (<li>) con el contenido del cuadro de texto.
 * - Agregar el nuevo elemento de lista al <div> con id "listContainer".
 * - Borrar el contenido del cuadro de texto después de agregar el elemento a la lista.
 * 
 * Asegúrate de que el evento se active al hacer clic en el botón con id "addButton".
 * El nuevo elemento de lista debe ser creado dinámicamente utilizando document.createElement.
 * El contenido del cuadro de texto se puede acceder y borrar utilizando inputElement.value y inputElement.value = ''.
 * 
 */