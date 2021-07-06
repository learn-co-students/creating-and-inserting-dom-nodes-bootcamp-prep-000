//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var newItem = document.createElement("ul");
document.body.appendChild(newItem);

for(let x = 2; x < 7; x++) {
  let ul = document.createElement("ul"); 
  for (let y = 1; y < x; y++) {
    let li = document.createElement("li"); 
    li.innerHTML = y.toString(); 
    ul.appendChild(li); 
  }
  document.body.appendChild(ul); 
}