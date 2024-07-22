
//Variabili per DOM
const formElement = document.getElementById('form-work')

const optionTypeWorkElement = document.getElementById('work')
const inputHourElement = document.getElementById('hour')

const inputPromotionElement = document.getElementById('user-promotion')

const calOutputElement = document.getElementById('call-output')
const callNotifyPromtionElement = document.getElementById('call-notify-promotion')
const callOutputDiscountElement = document.getElementById('call-output-discount')



// variabili per messagi di errore
const nameElement = document.getElementById('name')
const lastnameElemet = document.getElementById('lastname')
const emailElement = document.getElementById('email')

// variabili box di errore
let errorBox = document.getElementById('errorName')
let errorBoxLastname = document.getElementById('errorLastname')
let errorBoxWork = document.getElementById('errorWork')
let errorBoxHour = document.getElementById('errorHour')

let alertDiv = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
let alertBtn = '<button type="button" onClick="closeDiv()" value="chiudi" class="btn-close"></button>';


// funzione button chiusura messaggio di errore
function closeDiv() {
    if(errorBox.innerHTML = alertDiv + '<strong>Attento!</strong> Hai dimenticato di inserire il nome' + alertBtn + "</div>") {
    errorBox.style.display = "none"
    }
    if(errorBoxLastname.innerHTML = alertDiv + '<strong>Attento!</strong> Hai dimenticato di inserire il cognome' + alertBtn + "</div>") {
    errorBoxLastname.style.display = "none"
    }
    if(errorBoxWork.innerHTML = alertDiv + '<strong>Attento!</strong> Hai dimenticato di inserire il lavoro' + alertBtn + "</div>") {
        errorBoxWork.style.display = "none"
        }
    if(errorBoxHour.innerHTML = alertDiv + '<strong>Attento!</strong> Hai dimenticato di inserire le ore' + alertBtn + "</div>") {
        errorBoxHour.style.display = "none"
        }
}



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

    //verifica inserimento name
    if(nameElement.value == '') {
        errorBox.innerHTML = alertDiv + '<strong>Attento!</strong> Hai dimenticato di inserire il nome' + alertBtn + "</div>"
        nameElement.focus()
        errorBox.style.display = "block"
    }

    //verifica inserimento cognome
    if(lastnameElemet.value == '') {
        errorBoxLastname.innerHTML = alertDiv + '<strong>Attento!</strong> Hai dimenticato di inserire il cognome' + alertBtn + "</div>"
        lastnameElemet.focus()
        errorBoxLastname.style.display = "block"
    } 

    //prezzi lavori per ore e verifica inserimento lavoro
    if(selectWork === 'backend') {
        priceSomma = priceBackend * hour
    } else if(selectWork === 'frontend') {
        priceSomma = priceFrontend * hour
    } else if(selectWork === 'analysis') {
        priceSomma = priceAnalysis * hour
    } else{
        optionTypeWorkElement.classList.add('text-danger')
        errorBoxWork.innerHTML = alertDiv + '<strong>Attento!</strong> Hai dimenticato di inserire il lavoro' + alertBtn + "</div>"
        optionTypeWorkElement.focus()
        optionTypeWorkElement.style.display = "block"
    }

      //verifica inserimento ore
      if(isNaN(hour)) {
        errorBoxHour.innerHTML = alertDiv + '<strong>Attento!</strong> Hai dimenticato di inserire il cognome' + alertBtn + "</div>"
        inputHourElement.focus()
        inputHourElement.style.display = "block"
    } 


    //somma e due valori decimali
    priceSomma = priceSomma.toFixed(2)
    //console.log(priceSomma)

    //recupero input codice promozionale
    selectPromotion = inputPromotionElement.value //string
    console.log(selectPromotion)

    const promotionFind = promotions.includes(selectPromotion)

    //Stampare prezzo in DOM con o senza offerta
    if((isNaN(hour)) || (selectWork === null)) {
        calOutputElement.className = 'text-danger'
    }
    else if(promotionFind === false) {
        callNotifyPromtionElement.innerHTML = 'Il codice promozionale inserito non è valido!'
        calOutputElement.innerHTML = priceSomma + ' €'
        calOutputElement.className = 'text-body'
    }
    else {
        callNotifyPromtionElement.innerHTML = ''
        calOutputElement.innerHTML = priceSomma - priceSomma * 0.25 + ' €'
        callOutputDiscountElement.innerHTML = priceSomma + ' €'
        calOutputElement.className = 'text-body'
    }

})




