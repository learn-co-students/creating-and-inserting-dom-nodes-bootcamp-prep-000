var div = document.createElement("div")
div.style.background = "red"
div.style.textAlign = "center"
div.style.fontSize = "50px"
div.innerHTML = "Hello, DOM"

document.body.appendChild(div)

var ul = document.createElement("ul")

for( var i = 0; i < 5; i++){
  let li = document.createElement("li")
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

div.appendChild(ul)

ul.style.textAlign = "left"