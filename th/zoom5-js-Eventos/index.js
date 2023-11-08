
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