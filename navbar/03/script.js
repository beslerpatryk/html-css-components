const btnEl = document.getElementById("nav_btn")
const navEl = document.getElementById("nav")
const headerEl = document.getElementById("header")

const bodyEl = document.body

btnEl.addEventListener('click', showNav)

window.addEventListener('resize', checkNav)

function checkNav() {
    if(window.innerWidth > 1200) {
        navEl.style.opacity = "1"
    }
}

function showNav(){
    if(navEl.style.opacity === "0"){
        navEl.style.opacity = "1"
        // headerEl.style.marginBottom = "7rem"
        
    }else{
        navEl.style.opacity = "0"
        // headerEl.style.marginBottom = "0"
    }
        

}
