const price = document.getElementById('price');
localStorage.getItem('saved_price') ? '' : localStorage.setItem('saved_price', '1400000');
const sqMeters = document.getElementById('sq_meters');
const sqMeterPrice = document.getElementById('sq_meter_price');
const heart = document.querySelector('#like');
localStorage.getItem('like') ? heart.classList.add('red') : '';
const form = document.getElementById('form');
const main = document.querySelector('main');
const input = document.querySelector('form input');
const message = document.getElementById('message');
const success = document.querySelector('main .success');

const format = () => {
    price.innerHTML = parseInt(localStorage.getItem('saved_price'))
        .toLocaleString('es-AR');
}
format();

const calculate = () => {
    const result = localStorage.getItem('saved_price') / sqMeters.innerHTML;
    if (result >= 1) {
        sqMeterPrice.innerHTML = parseInt(result);
    } else {
        sqMeterPrice.innerHTML = 0;
    }
}
calculate();

const setStorage = () => {
    const newPrice = price.innerHTML;
    localStorage.setItem('saved_price', newPrice);
    calculate();
}

const setLike = () => {
    heart.classList.toggle('red');
    localStorage.getItem('like') ? localStorage.removeItem('like') : localStorage.setItem('like', 'red');
}

const openForm = () => {
    form.classList.remove('hidden');
    main.classList.add('opacity');
    input.value = '';
    input.classList.remove('invalid');
    message.classList.add('hidden');
}

const closeForm = () => {
    const expression = /\S+@\S+/
    if (expression.test(String(input.value).toLowerCase())) {
        main.classList.remove('opacity');
        form.classList.add('hidden');
        success.classList.remove('hidden');
    } else {
        input.classList.add('invalid');
        message.classList.remove('hidden');
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}