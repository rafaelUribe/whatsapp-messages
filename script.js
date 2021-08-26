const name_input = document.getElementById('name')
const price_input = document.getElementById('price')
const day_input = document.getElementById('day')
const month_input = document.getElementById('month')
const salesman_input = document.getElementById('salesman')
const message_input = document.getElementById('price-message')
const phone_input = document.getElementById('phone')
const link_container = document.getElementById('link-container')
const button_month = document.getElementById('this-month')

const date = new Date
const month_number = date.getMonth()

let name
let price
let day
let month
let salesman = 'Rafael'
let pronombre
let phone
let message_url 

let message

const months = {
    0: 'enero',
    1: 'febrero',
    2: 'marzo',
    3: 'abril',
    4: 'mayo',
    5: 'junio',
    6: 'julio',
    7: 'agosto',
    8: 'septiembre',
    9: 'octubre',
    10: 'noviembre',
    11: 'diciembre'
}

const currentMonth = months[month_number]
const upcomingMonth = months[month_number + 1]

month_input.value = upcomingMonth

const setCurrentMonth = () => {
    month_input.value = currentMonth
    month = currentMonth
    button_month.innerText = 'Siguiente mes'
}

const setUpcomingMonth = () => {
    month_input.value = upcomingMonth
    month = upcomingMonth
    button_month.innerText = 'Mes actual'
}

const toggleMonth = () => {
    month_input.value == currentMonth?
        setUpcomingMonth()
        :
        setCurrentMonth()
}


const setMessage = () => {
    message = `Hola, buen día ${name}, soy ${salesman} de la agencia Hyundai Colomos, le escribo para ayudarle a revisar opciones de renovación de la póliza de seguro de su vehículo la cual tiene como vencimiento el día ${day} de ${month}, la propuesta que tenemos con las mismas condiciones que tuvimos el periodo que vence tiene un precio de $${price}, quedo atento a cualquier comentario de su parte, muchas gracias ${name}!`

    let encoded = message

    for(let i=0; i < message.length; i++ ){
        encoded = encoded.replace(' ', '%20')
    }

    message_url = `https://wa.me/52${phone}/?text=${encoded}`

    if(phone){
        phone.length = 10?
            link_container.innerHTML = `<a href='${message_url}' target='_blank'>Mandar Mensaje</a>`
            :
            link_container.innerHTML = ''
    }

    message_input.innerText = message
}

const setName = e => {
    name = e.target.value
    setMessage()
}

const setPrice = e => {
    price = e.target.value
    setMessage()
}

const setDay = e => {
    day = e.target.value
    setMessage()
}

const setMonth = e => {
    month = e.target.value
    setMessage()
}

const setPhone = e => {
    phone = e.target.value
    setMessage()
}

const setSalesman = e => {
    salesman = e.target.value
    setMessage()
}


name_input.addEventListener('change', setName)
price_input.addEventListener('change', setPrice)
day_input.addEventListener('change', setDay)
month_input.addEventListener('change', setMonth)
phone_input.addEventListener('change', setPhone)
salesman_input.addEventListener('change', setSalesman)
button_month.addEventListener('click', toggleMonth)