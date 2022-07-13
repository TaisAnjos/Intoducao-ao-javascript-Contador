// // var preço = 2;
// var desconto = 0.2; // Variável pode mudar
// const PRECO = 2 //const são declaradas em maiusculo - Valor da const não muda

// function soma (a, b ) {
//     return a + b;
// }

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment () {
    
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber

    if (currentNumber > 0) {
        currentNumberWrapper.style.color = "green"
    }
    
}

function decrement () {
   
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red"
    }
}