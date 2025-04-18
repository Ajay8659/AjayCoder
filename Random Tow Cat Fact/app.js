// API Request
let url = "https://catfact.ninja/fact";
let div = document.createElement("div");
let element = "p";
div.setAttribute("class", "container");
let new1Element = document.createElement("p");
let new2Element = document.createElement("p");
let newUl = document.createElement("ul");
let new1Li = document.createElement("li");
let new2Li = document.createElement("li");
div.appendChild(newUl);
document.body.appendChild(div);

fetch(url)
.then((response)=>{
    return response.json();
}).then((fact1)=>{
    console.log(fact1.fact);
    new1Li.innerText = fact1.fact;
    newUl.appendChild(new1Li)
    return fetch(url);
}).then((res) => {
    return res.json();
}).then((fact2) => {
    new2Li.innerText = fact2.fact;
    newUl.appendChild(new2Li);
    console.log(fact2.fact);
}).catch((err)=>{
    console.log("Error: ", err);
})

