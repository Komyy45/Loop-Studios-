let burgerIcon = document.getElementById('burger')
let links = document.getElementById('links')
let exit = document.createElement("span")
exit.innerHTML = "X"
exit.style.cssText = "transition: 0.5s;color: white; text-align: end; cursor: pointer; display: none; font-weight: bold; order: -1; padding: 15px; font-size: 22px; width: fit-content; align-self: end;"
links.appendChild(exit)

exit.onclick = function(){
    links.style.cssText = "transition: 0.5s; left: -110%;"
    exit.style.display = "none"
}
burgerIcon.onclick = function(){
    links.style.cssText = "transition: 0.5s; left: -20px;"
    exit.style.display = "block"
}