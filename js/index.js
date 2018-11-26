//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div')
undefined
element
<div>​</div>​
element.innerHTML = "abalkjdskfjals;df"
"abalkjdskfjals;df"
element
<div>​abalkjdskfjals;df​</div>​
element.style.backgroundColor = #f9f9f9
VM345:1 Uncaught SyntaxError: Invalid or unexpected token
element.style.backgroundColor = '#f9f9f9'
"#f9f9f9"
document.body.appendChild(element)
<div style=​"background-color:​ rgb(249, 249, 249)​;​">​abalkjdskfjals;df​</div>​
element.addEventListener(click, function() {console.log('clicked!')})
VM690:1 Uncaught ReferenceError: click is not defined
    at <anonymous>:1:26
(anonymous) @ VM690:1
element.addEventListener("click", function() {console.log('clicked!')})
undefined
element
<div style=​"background-color:​ rgb(249, 249, 249)​;​">​abalkjdskfjals;df​</div>​
41VM714:1 clicked!
element.style.textAlign = 'center'
"center"
var ul = document.createElement('li');
undefined
for (let i = 0; i < 3; i++)	{
    let li = document.createElement('li');
    li.innerHTML = (i + 1).toString();
    ul.appendChild(li);
}
<li>​3​</li>​
element.appendChild(ul)
<li>​…​</li>​
ul.style.textAlign = 'left'
"left"
ul.removeChild(ul.querySelector('li:nth-child(2)'))
<li>​2​</li>​
ul.remove()
