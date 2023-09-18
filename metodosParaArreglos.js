const colores = ["Rojo", "Verde", "Azul"];

console.log(colores.length);

//document.body.innerHTML = colores.toString();

console.log(colores.join(" - "));

const letras = ["C", "B", "D", "A"];
console.log(letras.sort());

const numeros = [1, 2, 3, 4];
console.log(numeros.sort());

console.log(letras.reverse());
console.log(numeros.reverse());

const arreglo1 = [1, 2, 3];
const arreglo2 = ["A", "B", "C"];
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);

colores.push("Amarillo");
console.log(colores);

colores.pop();
console.log(colores);

const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
const diaEliminado = dias.shift();

console.log(dias[0]);
console.log(diaEliminado);

dias.unshift("Carlos");
console.log(dias);

const amigos = ["Alejandro", "Cesar", "Manuel"];
console.log(amigos);
amigos.splice(0, 0, "Rafael", "Roberto");
console.log(amigos);

const frutas = ["Fresa", "Manzana", "Uva", "Piña", "Mango", "Naranja", "Melon"];
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutas);
console.log(frutasFavoritas);
