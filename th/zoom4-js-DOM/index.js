//DOM y objeto document

//Basicamente nos permite manipular los elementos de un HTML usando JavaScript.

//La idea consiste en convertir los elementos seleccionados en objetos{} de manera
//que JavaScript pueda leerlos e interactuar con ellos.

//Seleccionar elementos
const title = document.getElementById("title");
const allSubtitles = document.getElementsByClassName("subtitle");
const allP = document.getElementsByTagName("p");

//Seleccionar con querySelector (y querySelectorAll)
const container = document.querySelector(".container");

//Crear Elemento
const newDiv = document.createElement("div");

//Asignar contenido del elemento
newDiv.innerHTML = "compu";

//Establecer un atributo
newDiv.setAttribute("class","newDiv");

//Agregarle un hijo a un elemento
container.appendChild(newDiv);

const con = console.log("asdasd")

con





