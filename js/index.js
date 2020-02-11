var element = document.createElement('div')
element.innerHTML = 'Hello, World!';
element.style.backgroundColor = '#f9f9f9';
element.style.textAlign = 'center';

document.body.appendChild(element);

var ul = document.createElement('ul');
for (let i = 0; i < 3; i++){
  let li = document.createElement('li');
  li.innerHTML = (i+1).toString();
  ul.appendChild(li);
}
element.appendChild(ul);
ul.style.textAlign = 'left';
