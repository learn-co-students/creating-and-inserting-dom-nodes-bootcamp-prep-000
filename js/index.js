//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
const element = document.createElement('div')
element.innerHTML = 'Hello, DOM!'
element.style.backgroundColor = 'pink'
document.body.appendChild(element)
element.style.textAlign = 'center'


element.remove();