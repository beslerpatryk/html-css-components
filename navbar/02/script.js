const sidebar = document.querySelector(".sidebar")
const menu_btn = document.getElementById("menu_btn")


menu_btn.addEventListener('click', activate)

function activate(){
    sidebar.classList.toggle("active")
}