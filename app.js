const DOMSelectors = {
    name: document.getElementById("userinput"),
    picture: document.getElementById("userinput2"),
    submit: document.getElementById("button"),
    form: document.getElementById("form"),
    display: document.querySelector(".box2"),
}

DOMSelectors.submit.addEventListener("click", function (e) {
    e.preventDefault();
    createthecard();
    refresh();
    goodbye();
  });

  function createthecard() {

    const title = DOMSelectors.name.value;
    const portrait = DOMSelectors.picture.value;
    DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `<section id="result">
        <div class="output">
        <p><img src=${portrait}></p>
        <p>${title}</p>
        <button class="buttons" id="clear">clear</button>
        </div>
        </section>`
    );
  }
  
  function refresh() {
    DOMSelectors.name.value = "";
    DOMSelectors.display.value = "";
  }

  function goodbye () {
    const remove = document.querySelectorAll(".clear");
    remove.forEach((eachRemove) => {
      eachRemove.addEventListener("click", (event) => {
        event.target.parentElement.remove();
      });
    });
  }