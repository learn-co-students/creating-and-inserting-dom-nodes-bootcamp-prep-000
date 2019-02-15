//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div'); //creat div
element.innerHTML = 'Hello, DOM!'; // div says 
element.style.backgroundColor = 'green'; // div style
document.body.appendChild(element); // put div into DOM
element.style.textAlign = 'center'; // realign
var ul = document.createElement('ul'); //creating list in DOM
for (let i=0; i<3; i++) {
  let li = document.createElement('li'); //creating list
  li.innerHTML = (i+1).toString(); 
  ul.appendChild(li);
}
element.appendChild(ul); //adding list to DOM
ul.style.textAlign = 'left'; //realign
ul.removeChild(ul.querySelector('li:nth-child(2)')); // removing part of list (number 2)
ul.remove(); // deleting all of var ul
element.remove(); // deleting all of element