const price = document.getElementById("price");
localStorage.setItem("saved_price", "1400000");
const sqMeters = document.getElementById('sq_meters');

price.innerHTML = parseInt( localStorage.getItem("saved_price") )
.toLocaleString('es-AR');


const calculate = () => {
    const result = localStorage.getItem("saved_price") / sqMeters.innerHTML;
    document.getElementById('sq_meter_price').innerHTML = parseInt(result);
}

calculate();



/*const price = document.getElementById('price');
const priceNumber = parseInt(price.innerHTML);

function toAR() {
    price.innerHTML = priceNumber.toLocaleString('es-AR');
    localStorage.setItem("price", )
}


function edit() {
price.contentEditable = true;
}

function calculate () {

}

toAR();

let savedprice = localStorage.getItem ()*/