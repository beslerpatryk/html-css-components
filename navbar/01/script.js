const navbar = document.getElementById("navbar")
const button = document.getElementById("btn")

navbar.classList.add("hidden")


btn.addEventListener('click', open_menu)

function open_menu(){
    if(navbar.classList.contains("hidden")){
    navbar.classList.remove("hidden")
    }
    else{
        navbar.classList.add("hidden")

    }
}