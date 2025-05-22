// DOM (DOcument Object model)
console.log("DOM (DOcument Object model)");
console.log("1.> getElementById('idname')");
let h2 = document.getElementById("Html");
    h2.style.backgroundColor = "red";

 console.log("2.> getElementsByClassName('Class_name')");
    let elements = document.getElementsByClassName("HtmlClass");
    
    // Loop through all elements with the class and apply style
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "blue";
    }

console.log("3.> getElementsByTagName('tag_name')");
   let paragraphs = document.getElementsByTagName('p');

   for(let i=0; i<paragraphs.length; i++){
    paragraphs[i].style.backgroundColor = "lightgreen";
   }

console.log("4.> querySelector('CSS Selector')"); // target single element .  
   let firstParagraph = document.querySelector(".description");
   firstParagraph.style.color = "gray";

   let title = document.querySelector("#main-title");
   title.style.backgroundColor = "yellow";

console.log("5.> querySelectoAll('CSS Selector')"); // target all matching element. 
   let headings = document.querySelectorAll(".highlight");
   headings.forEach(function(h3) {
       h3.style.color =  "darkgreen";
   });

//Create & Insert Element.
console.log("Create & Insert Element.");
  console.log("1>. createElement('tagName')");//used to create new html element 
   let my_section = document.createElement('section');
   console.log(my_section);
   // optionally add a class or style
   my_section.className = "my_section";
   my_section.style.backgroundColor = "lightblue";
   my_section.style.padding = "10px";
   my_section.innerHTML = "<strong>This is bold text in the section</strong>";

    //Append it to an existing element(like #container)
   console.log("2>. appendchild('element')");
   document.getElementById("container").appendChild(my_section); 
//    document.body.appendChild(my_section);

 console.log("3>. insertAdjecentElement(position, element)");
  // create a new element
  let newDiv = document.createElement("div");
  newDiv.textContent = "📌 I was inserted before the target!";
  newDiv.style.color = "darkgreen";
// target element
  let target = document.getElementById("target");
//   Insert newDiv before the target element.
  target.insertAdjacentElement("beforebegin", newDiv);

//   Insert text & element.
  console.log("1>.  textContent:-used to insert text inside an element");
   let my_pera = document.getElementsByClassName("laal")[1];
   my_pera.textContent = "Hello everyone";
   
//    innerHtml:- it is used to insert text & element inside an element.
  let my_text = document.getElementsByClassName("laali")[2];
  my_text.innerHTML = `<p>I am paragraph for u </p>
                       <p>I am new Paragraph </p>`;

//  Insert and Remove attribute:-
//1 setAttribute('attr_name','value')
console.log("setAttribute('attr_name','value'):- used to insert attribute to an element.");
    
   const button = document.getElementById('myButton');
   button.setAttribute('class', 'btn btn-primary');

//2 removeAttribute("attr_name")
   
const img = document.getElementById('myImage');
 img.removeAttribute('alt');

 console.log("Traverse nodes");
 // Traverse Nodes:-
// 1. parentElement:-returns reference of parent html element.
    const para = document.getElementById('para1');
    console.log(para.parentElement);

    // 2.nextElementSibling:-return ref of next node sibling
    const para1 = document.getElementById('para1');
    console.log(para1.nextElementSibling);
    // 3.previousElementSibling:-returns refrence of previous html node sibling
    const para2 = document.getElementById('para2');
    console.log(para2.previousElementSibling);
    // 4.children:-return html collection of all child nodes.
    const container = document.getElementById('container');
    console.log(container.children);
    // 5. childNodes:-return nodelist of all nodes like comment ,text.
    const containers = document.getElementById('container');
    console.log(containers.childNodes);
    
// remove Element
console.log("remove element 1. remove()");
console.log(container.remove);

/////// -------------Events in JS---------------////////
    console.log("events in js   --ways to attach event listner.");
    console.log("-----as an HTML attribute-----");

    function sayHello(){
        alert("Hello from inline event!");
    }
 //   EXAMPLE 2
    function highlight(element) {
        element.style.backgroundColor = "yellow";
    } 
//   example 3
    function handleChange(select) {
        alert("you selected: "+ select.value);
    }
   
//   as a javaScript property
console.log("as a js property");
   
//  Example 1
   const buttons = document.getElementById('myButtons');
   buttons.onclick = function(){
     alert('Button clicked via JS property!')
   };
// EXAMPLE 2
    const box = document.getElementById('myBox');
    box.onmouseover =  function(){
        box.style.backgroundColor = 'lightgreen';
    };
// Example 3
  const input = document.getElementById('nameInput');
  input.onchange= function(){
    alert('you change the input to: '+ input.value);
  };


 


