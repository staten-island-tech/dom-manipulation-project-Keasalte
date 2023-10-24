const DOMSelectors = {
  form: document.getElementById("form"),
  name: document.querySelector(".userinput"),
  image: document.querySelector(".userinput2"),
  output: document.getElementById("output"),
};

DOMSelectors.form.addEventListener("button", function () {  
    
    createthecard();
    inputclear();

  });

  function createthecard() {
    const title = DOMSelectors.name.value;
    const image = DOMSelectors.image.value;
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