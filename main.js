let container = document.getElementById("container")
let thankyouState = document.getElementById("thank-you-state")

let rateSelection = document.getElementById("rate-selection")
let submit = document.getElementById("submit")

submit.addEventListener('click', () =>{
    let ratingValue = document.querySelector('input[name="num"]:checked').value
    if (ratingValue){
        container.style.display = "none"
        thankyouState.style.display = "block"
        rateSelection.textContent = ratingValue
    }
})

