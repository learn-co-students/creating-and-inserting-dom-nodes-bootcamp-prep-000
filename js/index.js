//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div');
element.innerText = "Hello Emu";
var main = document.querySelector('#main');
main.appendChild(element);
element.style.color = 'green';
element.style.textAlign = 'center';
element.setAttribute('id', 'emu');

var ul = document.createElement('ul');

for( let i = 0; i < 5; i += 1) {
  var li = document.createElement('li');
  li.innerText = i;
  ul.appendChild(li);
}

ul.style.textAlign = 'left';
document.querySelector('#emu').appendChild(ul);
ul.removeChild(ul.querySelector('li:nth-child(2)'));




