const DOMSelectors = {
    name: document.getElementById("userinput"),
    picture: document.getElementById("userinput2"),
    submit: document.getElementById("button"),
    form: document.querySelector("#form"),
    display: document.querySelector(".box"),
}

DOMSelectors.submit.addEventListener("click", function (e) {
    e.preventDefault();
    result();
    clearInputs();
    clearResult();
  });

  function result() {

    let Name = DOMSelectors.name.value;
    let image = DOMSelectors.picture.value;
    DOMSelectors.box.insertAdjacentHTML(
        "afterend",
        `
     <section id="result">
     <div class="output">
     <p><img src=${image}></p>
     <p>${Name}</p>
     <button class="buttons" id="clear">clear</button>
     </div>
     </section>
        `
    );
  }
  