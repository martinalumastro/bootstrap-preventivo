
//Variabili per DOM
const formElement = document.getElementById('form-work')

const optionTypeWorkElement = document.getElementById('work')
const inputHourElement = document.getElementById('hour')

const inputPromotionElement = document.getElementById('user-promotion')

const calOutputElement = document.getElementById('call-output')
const callNotifyPromtionElement = document.getElementById('call-notify-promotion')
const callOutputDiscountElement = document.getElementById('call-output-discount')

//variabili per i prezzi base del lavoro
let priceBackend = 20.50 //number
let priceFrontend = 15.30 //number
let priceAnalysis = 33.60 //number

//variabile somma
let priceSomma = 0

//array offerte
let promotions = ['YHDNU32','JANJC63','PWKCN25','SJDPO96','POCIE24']
console.log(promotions)

// for array promozioni
for(let i = 0; i < promotions.lenght; i++) {
    //stampare in DOM offerta valida
    console.log(i)
    let actualPromotion = promotions[i]
    console.log(actualPromotion,i)
}

//js form
formElement.addEventListener('submit', function (event) {

    //impedire invio form
    event.preventDefault()
    console.log('submit')

    //recupero option del lavoro inserito dall'utente
    const selectWork = optionTypeWorkElement.value //string
    console.log(selectWork)

    //recupero input delle ore di lavoro
    const hour = parseInt(inputHourElement.value) //number

    //prezzi lavori per ore
    if(selectWork === 'backend') {
        priceSomma = priceBackend * hour
    } else if(selectWork === 'frontend') {
        priceSomma = priceFrontend * hour
    } else {
        priceSomma = priceAnalysis * hour
    }

    //somma e due valori decimali
    priceSomma = priceSomma.toFixed(2)
    //console.log(priceSomma)

    //recupero input codice promozionale
    selectPromotion = inputPromotionElement.value //string
    console.log(selectPromotion)

    const promotionFind = promotions.includes(selectPromotion)

    //Stampare prezzo in DOM con o senza offerta
    if(promotionFind === false) {
        callNotifyPromtionElement.innerHTML = 'Il codice promozionale inserito non è valido!'
        calOutputElement.innerHTML = priceSomma + ' €'
    }
    else {
        calOutputElement.innerHTML = priceSomma - priceSomma * 0.25 + ' €'
        callOutputDiscountElement.innerHTML = priceSomma + ' €'
    }

})