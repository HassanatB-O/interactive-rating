let rating = document.querySelectorAll("#num")
let rate = document.getElementById("rating")
let request = document.getElementById("request")
let submit = document.getElementById("submit")
let header = document.getElementById("header")
let svg = document.getElementById("svg")

rating.forEach(rating =>{
rating.addEventListener('click', (event) =>{
    event.target.style.backgroundColor = "hsl(216, 12%, 54%)"
    event.target.style.color = "hsl(0, 0%, 100%)"
    number = rating.innerHTML        
})
})

submit.addEventListener('click', () =>{
    if(number == 1){
        request.innerHTML = "You selected 1 out of 5"
    }
    else if(number == 2){
        request.innerHTML = "You selected 2 out of 5"
    }
    else if(number == 3){
        request.innerHTML = "You selected 3 out of 5"
    }
    else if(number == 4){
        request.innerHTML = "You selected 4 out of 5"
    }
    else if(number == 5){
        request.innerHTML = "You selected 5 out of 5"
    }

    document.body.style.textAlign = "center"

    request.style.backgroundColor = "hsl(216, 12%, 8%)"
    request.style.opacity = "0.6"
    request.style.fontWeight = "700"
    request.style.borderRadius = "10px"
    request.style.padding = "5px"
    request.style.marginTop = "15px"
    request.style.color = "hsl(25, 97%, 53%)"

    svg.src = "images/illustration-thank-you.svg"
    svg.style.borderRadius = "0%"
    svg.style.display = "inline-block"
    svg.style.backgroundColor = "hsl(213, 19%, 18%)"
    svg.style.marginLeft = "0"
    
    header.style.display = "none"

    submit.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch."
    submit.style.backgroundColor = "hsl(213, 19%, 18%)"
    submit.style.color = "hsl(216, 12%, 54%)"
    submit.style.textTransform = "none"
    submit.style.cursor = "auto"
    
    rate.innerHTML = "Thank you!"
    rate.style.display = "flex"
    rate.style.justifyContent = "center"
    rate.style.fontSize = "40px"
    rate.style.fontWeight = "700"
})
