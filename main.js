const price = document.getElementById('price');
localStorage.getItem('saved_price') ? '' : localStorage.setItem('saved_price', '1400000');
const sqMeters = document.getElementById('sq_meters');
const sqMeterPrice = document.getElementById('sq_meter_price');
const heart = document.querySelector('#like');
localStorage.getItem('like') ? heart.classList.add('red') : '';

const format = () => {
price.innerHTML = parseInt( localStorage.getItem('saved_price') )
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

}