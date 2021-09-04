const emailLabel = document.getElementById("email-label")
const passLabel = document.getElementById("password-label")
const emailInput = document.getElementById("email")
const passInput = document.getElementById("password")

console.log(document.activeElement)

var activeElement = document.activeElement 

emailInput.addEventListener('focus', higlight)
passInput.addEventListener('focus', higlight)

let active

function higlight(){
    if(document.activeElement  === emailInput){

        emailLabel.classList.add("active")
        passLabel.classList.remove("active")
    }
    else if(document.activeElement  === passInput){
        passLabel.classList.add("active")
        emailLabel.classList.remove("active")
    }
    else {
        emailLabel.classList.remove("active")
        passLabel.classList.remove("active")
    }

}

