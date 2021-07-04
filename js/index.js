var element =
document.createElement('div');

element.innerHTML = 'Hello, DOM';

element.style.backgroundColor = '#f9f9f9';

document.body.appendChild(element);

element.style.color = '#0978ff';

element.style.textAlign = 'center';

element.style.backgroundColor = '#ff39df';

var ul = document.createElement('ul');


for (let i = 0; i < 3; i++) {
    let li = document.createElement('li');
    li.innerHTML = (i + 1).toString();
	ul.appendChild(li);
}

element.appendChild(ul);

ul.style.textAlign('left');

ul.removeChild(ul.querySelector('li:nth-child(2)'));

ul.remove();
