const numero = 10;
console.log(numero, typeof numero);

const texto = numero.toString();
console.log(texto, typeof texto);

// toFixed
const pi = 3.1415;
console.log(pi);
console.log(pi.toFixed(1));

//parseInt()
const numero1 = parseInt(prompt("Escribe un numero:"));
const numero2 = parseInt(prompt("Escribe un numero: "));
console.log(numero1 + numero2);
//parseFloat()
const fnumero1 = parseFloat(prompt("Escribe un numero:"));
const fnumero2 = parseFloat(prompt("Escribe un numero: "));
console.log(fnumero1 + fnumero2);
//Math.random()
const numerorandom = Math.random();
console.log(numerorandom);
//Math.floor
console.log(Math.floor("10.7"));
//Math.ceil
console.log(Math.ceil("10.7"));
//Math round
console.log(Math.round("5.55"));
