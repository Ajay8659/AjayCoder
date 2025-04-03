let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
input.placeholder = "Enter your ToDO";

button.addEventListener("click", () => {
  if (input.value != "") {
    let item = document.createElement("li");
    item.classList.add("listItem");
    item.innerHTML = `${input.value} <i class="fa-solid fa-trash-can"></i>`;
    ul.appendChild(item);
    input.value = "";
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.nodeName == "I") {
    let delpar = event.target.parentElement;
    delpar.remove();
  }
});
