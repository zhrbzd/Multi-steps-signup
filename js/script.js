// Get inputs
let inputs = document.querySelectorAll(".input")
// Get "a" tag to title of next step button
let next = document.querySelector(".next")
// When window loaded completely
window.onload = function () {
    // Get an input
    inputs.forEach((input, e) => {
        // When any key uped
        input.addEventListener("keydown", e => {
            // Get input value 
            let value = e.target.value
            if(value == ""){
                input.classList.add("inputDanger")
                next.removeAttribute("href")
            } else {
                input.classList.remove("inputDanger")
                input.classList.add("inputSuccess")
            }
        })
    })
}
// When click on next button
function nextStep(){
    inputs.forEach((input, e) => {
        // Is null then add inputDanger class and styles
        if(input.value == ""){
            input.classList.add("inputDanger")
            next.removeAttribute("href")
        // Not null then remove inputDanger class and add inputSuccess and go to next step
        } else {
            input.classList.remove("inputDanger")
            next.href = "./pages/secondStep.html"
        }
    })
}
function thirdStep(){
    inputs.forEach((input, e) => {
        if(input.value == ""){
            input.classList.add("inputDanger")
            next.removeAttribute("href")
        } else {
            input.classList.remove("inputDanger")
            next.href = "../pages/thirdStep.html"
        }
    })
}
function latestStep(){
    inputs.forEach((input, e) => {
        if(input.value == ""){
            input.classList.add("inputDanger")
            next.removeAttribute("href")
        } else {
            input.classList.remove("inputDanger")
            next.href = "../pages/latestStep.html"
        }
    })
}