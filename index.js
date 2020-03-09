// adding js anyways

// awesome it works, but it doesn't show up yet
var element = document.createElement('div');
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

// append to dom node
document.body.appendChild(element);

// give styling
element.style.textAlign = 'center';

// append more elements
var ul = document.createElement('ul');
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
 
element.appendChild(ul);

// more styling
ul.style.textAlign = 'left';

// remove one list item
ul.removeChild(ul.querySelector('li:nth-child(2)'));

// remove the whole list
ul.remove();