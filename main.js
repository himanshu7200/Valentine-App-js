let form = document.querySelector("form");
let select = document.querySelector("select");
let textarea = document.querySelector("textarea");
let ul = document.querySelector("ul");
let body = document.querySelector("body")
// body.style.backgroundImage = "url(https://img.freepik.com/premium-vector/pink-heart-abstract-background_32550-146.jpg?w=1060)"

const save = (e) => {
    e.preventDefault();


// create element

let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let li = document.createElement("li");
let delBtn = document.createElement("delBtn");

//   classes ka naam karan

li.className = "list-group-item w-80 float-start"
h1.className = "h5"
h2.className = "h6"
delBtn.className = "btn btn-lg display-1 bg-black text-white rounded-pill float-end";



//  innertext

h1.innerText = `your are my  ${select.value}`;
h2.innerText =  textarea.value; 
delBtn.innerText = "💔💔 "

//  upload

ul.appendChild(li);
li.appendChild(h1);
li.appendChild(h2);
li.appendChild(delBtn);

form.reset();

};
form.addEventListener("submit", save);

//  hatana kese he 

const deleteTodo = (e) => {
    if(e.target.className.includes("btn-lg")){
        let li = e.target.parentElement;
        if(window.confirm("are you sure")){
            ul.removeChild(li);
        }
    }
};

ul.addEventListener("click", deleteTodo );



