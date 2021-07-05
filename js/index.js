/*
//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var body = document.body;
//body.style.background = Color.grey;

var e = document.createElement('div');
e.innerHTML = "HELLO!  This is where a text body could go if I wanted";
e.style.backgroundColor = '#f9f9f9';

var b = document.createElement('h1');
b.innerHTML = `This is a web page title H1`;
b.style.textAlign = 'center';
b.style.backgroundColor = '#f9f9f9';

var a = document.createElement('h2');
a.innerHTML = "Subheader H2";
a.style.textAlign = 'center';
a.style.backgroundColor = "#f9f9f9";

body.appendChild(b);
body.appendChild(e);
b.appendChild(a);


var ul = document.createElement('ul');
for(let i = 0; i < 3; i++)
{
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  li.style.textAlign = 'left';
  ul.appendChild(li);
}

body.appendChild(ul);

ul.removeChild(ul.querySelector('li:nth-child(2)'));
// removes the 'n'th child of the ul

ul.remove();  // so sad
*/
