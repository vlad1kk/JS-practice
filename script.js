"use strict"
//WEATHER
const weatherBlock = document.querySelector("#weather")

async function loadWeather(e) {
    weatherBlock.innerHTML = `
    <div class="weather__loading">
    <img src="IMG/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340" alt="Loading...">
    </div>`
    const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lutsk&appid=69a93cc28407bfb5345dbed434dcf30d';
    const response = await fetch(server, {
        method: 'GET'
    })
    const responseResult = await response.json()
    if (response.ok) {
        getWeather(responseResult)
    } else {
        weatherBlock.innerHTML = responseResult.message
    }
}

function getWeather(data) {
    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;

    const template = `
    <div class="weather__header">
    <div class="weather__main">
        <div class="weather__city">${location}</div>
        <div class="weather__status">${weatherStatus}</div>
    </div>
    <div class="weather__icon">
        <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
    </div>
    </div>
    <div class="weather__temp">${temp}</div>
    <div class="weather__feels-like">Feels like:${feelsLike}</div>`

    weatherBlock.innerHTML = template;
}
if (weatherBlock) {
    loadWeather();
}
// CLOCK

const clock = document.querySelector(".clock")
function time(){
    const date = new Date();
    const hours = date.getHours() < 10 ? '0' + date.getHours(): date.getHours();
    const min = date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes();
    const sec = date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds();

    clock.innerHTML = `${hours}:${min}:${sec}`
}
setInterval(time, 1000)


// POP-UP(registration)
const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

// функція за допомогою при кліку відкриється вікно
// event.preventDefault() - метод щоб при кліку на кнопку нікуди не переходило(тобото на #)
// classList.add - добавить клас - 'active
openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

// функція за допомогою при кліку закриється вікно
closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})


// POP-UP(authorization)
const openPopUpA = document.getElementById('open_pop_up_a');
const closePopUpA = document.getElementById('pop_up_close_a');
const popUpA = document.getElementById('pop_up_a');

// функція за допомогою при кліку відкриється вікно
// event.preventDefault() - метод щоб при кліку на кнопку нікуди не переходило(тобото на #)
// classList.add - добавить клас - 'active
openPopUpA.addEventListener('click', function(e){
    e.preventDefault();
    popUpA.classList.add('activea');
})

// функція за допомогою при кліку закриється вікно
closePopUpA.addEventListener('click', () => {
    popUpA.classList.remove('activea');
})