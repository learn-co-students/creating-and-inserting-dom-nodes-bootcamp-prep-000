var ul = document.createElement('ul');

element.innerHTML = 'Hello, DOM!';
document.body.appendChild(element);

for(let i = 0 ; i<3;i++){let li = document.createElement('li'); li.innerHTML = (i + 1).toString(); ul.appendChild(li);}

document.body.appendChild(ul);

ul.removeChild(ul.querySelector('li:nth-child(2)'));


