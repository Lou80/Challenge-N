const price = document.getElementById('price');
localStorage.setItem('saved_price', '1400000');
const sqMeters = document.getElementById('sq_meters');

const format = () => {
price.innerHTML = parseInt( localStorage.getItem('saved_price') )
.toLocaleString('es-AR');
}
format();


const calculate = () => {
    const result = localStorage.getItem('saved_price') / sqMeters.innerHTML;
    document.getElementById('sq_meter_price').innerHTML = parseInt(result);
}
calculate();

const setStorage = () => {
    const newPrice = price.innerHTML;
    localStorage.setItem('saved_price', newPrice);
    console.log(localStorage.getItem('saved_price'));
    calculate();
}