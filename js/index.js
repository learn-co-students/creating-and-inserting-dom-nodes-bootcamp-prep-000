var element = document.createElement('div');
undefined
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';
"#f9f9f9"
document.body.appendChild(element);
<div style=​"background-color:​ rgb(249, 249, 249)​;​">​Hello, DOM!​</div>​
element.style.textAlign = 'center';
"center"
var ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
<ul>​…​</ul>​
ul.style.textAlign = 'left';
"left"
ul.removeChild(ul.querySelector('li:nth-child(2)'));
<li>​2​</li>​
ul.removeChild
ƒ removeChild() { [native code] }
ul.removeChild(ul.querySelector('li'));
<li>​1​</li>​
ul.removeChild(ul.querySelector('li:nth-child(n)'));
<li>​3​</li>​
element.remove()
//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
