//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div');
undefined
element
<div>​</div>​
element.innerHTML = 'Hello, DOM!';
"Hello, DOM!"
element.style.backgroundColor = '#f9f9f9';
"#f9f9f9"
document.body.appendChild(element);
<div style=​"background-color:​ rgb(249, 249, 249)​;​">​Hello, DOM!​</div>​
element.style.textAlign = 'center';
"center"
var ul = document.createElement('ul');
undefined
for (var i = 0; i < 3; i++) {
  var li = 
      document.createElement('li');
    li.innerHTML = (i + 1).toString();
    ul.appendChild(li);
}
<li>​3​</li>​
element.appendChild(ul);
<ul>​<li>​1​</li>​<li>​2​</li>​<li>​3​</li>​</ul>​
ul.style.textAlign = 'left';
"left"
ul.removeChild(ul.querySelector('li:nth-child(2)'))
<li>​2​</li>​
element.remove()
undefined
ul.remove();