const body = document.querySelector("body");

const link = document.createElement("a");

link.setAttribute("href", "http://google.com");
link.setAttribute("class", "grupoDeLinks");
link.setAttribute("target","__blank")

link.innerHTML = "IR A GOOGLE"

body.appendChild(link);



