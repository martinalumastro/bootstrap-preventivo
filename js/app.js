const formElement = document.getElementById('form-work')

const optionTypeWorkElement = document.getElementById('work')
const inputHourElement = document.getElementById('hour')

const calOutputElement = document.getElementById('call-output')
//console.log(formElement,inputHourElement,optionTypeWorkElement,calOutputElement)

let priceBackend = 20.50 //number
let priceFrontend = 15.30 //number
let priceAnalysis = 33.60 //number
let priceSomma =

formElement.addEventListener('submit', function (event) {

    //impedire invio form
    event.preventDefault()
    console.log('submit')

    //recupero option del lavoro inserito dall'utente
    const selectwork = optionTypeWorkElement.value //string
    console.log(selectwork)

    //recupero input delle ore di lavoro
    const hour = parseInt(inputHourElement.value) //number

    //prezzi lavori per ore
    if(selectwork === 'backend') {
        priceSomma = priceBackend * hour
    } else if(selectwork === 'frontend') {
        priceSomma = priceFrontend * hour
    } else {
        priceSomma = priceAnalysis * hour
    }

    priceSomma = priceSomma.toFixed(2)
    //console.log(priceSomma)

    //stampare in DOM la somma SENZA OFFERTE
    calOutputElement.innerHTML = priceSomma + ' €'
})