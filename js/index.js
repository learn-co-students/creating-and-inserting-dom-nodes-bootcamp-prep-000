//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div');
element.innerHTML = 'Hello world!';
element.style.backgroundColor = '#f9f9f9';
element.style.textAlign = 'center';

var ul = document.createElement('ul');
ul.style.textAlign = 'left';
for(let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

ul.removeChild(ul.querySelector('li:nth-child(2)'));

element.appendChild(ul);
ul.remove();

document.body.appendChild(element);



