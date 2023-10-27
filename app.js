const DOMSelectors = {
  button: document.getElementById("button"),
  text: document.getElementById("text"),
  box: document.getElementById("box1"),
  image: document.querySelector(".pictures"),
  input: document.querySelector(".eee"),
};

DOMSelectors.button.addEventListener("click", function(e){
  e.preventDefault();
  create();
  refresh();
  nuke();
 }
);

function refresh() {
  DOMSelectors.input.value = "";
  DOMSelectors.image.value = "";
}

function create() {
  let list = document.querySelector("#output");
  list.insertAdjacentHTML(
    "beforeend",
    `
    <div class="cards">
    <img src="${DOMSelectors.image.value}" alt="">
    <p class="cardname">${DOMSelectors.input.value}</p>
    <button class="delete">Delete</button>
    </div>
    `
  );
};

function nuke(){ 
  document.querySelectorAll(".delete")
  .forEach((remove) => {
    remove.addEventListener("click", function() {
      this.parentElement.remove();
    });
  });
 }
 