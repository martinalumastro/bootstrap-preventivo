
//Variabili
const formElement = document.getElementById('form-work')

//variabili per lavoro, ore, codice promaionale
const optionTypeWorkElement = document.getElementById('work')
const inputHourElement = document.getElementById('hour')
const inputPromotionElement = document.getElementById('user-promotion')

// variabili per DOM stampa prezzi/sconti
const calOutputElement = document.getElementById('call-output')
const callNotifyPromtionElement = document.getElementById('call-notify-promotion')
const callOutputDiscountElement = document.getElementById('call-output-discount')

// variabili per nome/cognome/email
const nameElement = document.getElementById('name')
const lastnameElemet = document.getElementById('lastname')
const emailElement = document.getElementById('email')

//stampare in dom riepilogo
const recapElement = document.getElementById('recap')

//variabili per i prezzi base del lavoro
let priceBackend = 20.50 //number
let priceFrontend = 15.30 //number
let priceAnalysis = 33.60 //number

//variabile somma
let priceSomma = 0

//array offerte
let promotions = ['YHDNU32','JANJC63','PWKCN25','SJDPO96','POCIE24']

//js form
formElement.addEventListener('submit', function (event) {

    //impedire invio form
    event.preventDefault()
    console.log('submit')

    //recupero option del lavoro inserito dall'utente
    const selectWork = optionTypeWorkElement.value //string

    //recupero input delle ore di lavoro
    const hour = parseInt(inputHourElement.value) //number


    //verifica inserimento name
    nameElement.classList.remove('is-valid', 'is-invalid')
    if(nameElement.value === '') {
        nameElement.classList.add('is-invalid')
    } else {
        nameElement.classList.add('is-valid')
    }


    //verifica inserimento cognome
    lastnameElemet.classList.remove('is-valid', 'is-invalid')

    if(lastnameElemet.value === '') {
        lastnameElemet.classList.add('is-invalid')
    } else {
        lastnameElemet.classList.add('is-valid')
    }


    //prezzi lavori per ore e verifica inserimento lavoro
    optionTypeWorkElement.classList.remove('is-valid', 'is-invalid')

    if(selectWork === 'backend') {
        priceSomma = priceBackend * hour
        optionTypeWorkElement.classList.add('is-valid')
    } else if(selectWork === 'frontend') {
        priceSomma = priceFrontend * hour
        optionTypeWorkElement.classList.add('is-valid')
    } else if(selectWork === 'analysis') {
        priceSomma = priceAnalysis * hour
        optionTypeWorkElement.classList.add('is-valid')
    } else{
        optionTypeWorkElement.classList.add('is-invalid')
        optionTypeWorkElement.focus()
    }


    //verifica inserimento ore
    inputHourElement.classList.remove('is-valid', 'is-invalid')
      if(isNaN(hour)) {
          inputHourElement.classList.add('is-invalid')
          inputHourElement.focus()
      } else {
          inputHourElement.classList.add('is-valid')
      }


    //somma e due valori decimali
    priceSomma = priceSomma.toFixed(2)

    priceSommaOfferta = priceSomma - priceSomma * 0.25

    //recupero input codice promozionale
    selectPromotion = inputPromotionElement.value //string
   
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
        calOutputElement.innerHTML = priceSommaOfferta.toFixed(2) + ' €'
        callOutputDiscountElement.innerHTML = priceSomma + ' €'
        calOutputElement.className = 'text-body'
    }

    let user = {
        name: nameElement.value,
        lastname: lastnameElemet.value,
        email: emailElement.value,
        work: selectWork,
        hour: hour,
    }
    

    //PROVA STAMPA IN DOM RIEPILOGO VALORI
    recapElement.innerHTML = 
        '<h3>Riepilogo</h3>' + 
        '<div>' +
            '<h4 class="pt-4">Dati utente</h4>' + 
        '</div>' +
        '<div class="mt-2">' + 
            '<p>' + 'Nome: ' + user.name + '</p>' +
            '<p>' + 'Cognome: ' + user.lastname + '</p>' +
            '<p>' + 'Email: ' + user.email + '</p>' +
        '</div>' +  
        '<div>' +
            '<h4 class="pt-4">Dati richiesta</h4>' + 
        '</div>' + 
        '<div class="mt-2">' +
            '<p>' + 'Lavoro richiesto: ' + user.work + '</p>' +
            '<p>' + 'Ore richieste: ' + user.hour + '</p>' +
        '</div>'
})




