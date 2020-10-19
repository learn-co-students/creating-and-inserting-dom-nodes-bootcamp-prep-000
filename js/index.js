//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded


let element = document.createElement('div');
document.body.appneChild(element);

let ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appneChild(li);
}

element.appneChild(ul);