//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
let div = document.createElement('div');
div.innerHTML = 'Hello, DOM!';
div.style.backgroundColor = '#f9f9f9';
div.style.textAlign = 'center';
// let main = document.getElementById('main');
document.body.appendChild(div);
let ul = document.createElement('ul');

for(let i = 0; i < 3; i++){
  console.log(i);
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

div.appendChild(ul);
ul.style.textAlign = 'left';

ul.removeChild(ul.querySelector('li:nth-child(2)'));

ul.remove();
