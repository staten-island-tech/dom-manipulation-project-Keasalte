const DOMSelectors = {
  form: document.getElementById("form"),
  name: document.querySelector(".userinput"),
  image: document.querySelector(".userinput2"),
  button: document.getElementById("button"),
};

DOMSelectors.form.addEventListener("click", function (e) {  
    e.preventDefault();
    e.createthecard();
    e.inputclear();
  });

  function createthecard() {
     title = DOMSelectors.name.value;
     image = DOMSelectors.image.value;
    DOMSelectors.output.insertAdjacentHTML(
        "afterbegin",
        `    
        <section id="result">
          <div class="output2">
            <p><img src=>${image}</p>
             <p>${title}</p>
             <button class="buttons" id="clear">clear</button>
         </div>
        </section>`
    );
  }
  
  function inputclear(){
    DOMSelectors.name.value="";
    DOMSelectors.image.value="";
  }