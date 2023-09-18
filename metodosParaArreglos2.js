const nombres = [
  "Carlos",
  "Rafael",
  "Estefania",
  "Rodrigo",
  "Rafael",
  "Gema",
  "Diana",
  "Sara",
];
//indexOf

console.log(nombres.indexOf("Rafael"));
console.log(nombres.indexOf("Aldito"));

console.log(nombres.lastIndexOf("Rafael"));
//forEach
nombres.forEach((nombre, index) => {
  console.log(`Hola ${nombre}`);
  console.log(`Tu indexOf es: (${index})`);
});
//find
const resultado = nombres.find((nombre) => {
  if (nombre[0] === "E") {
    return nombre;
  }
});
console.log(resultado);
//map
const nombresMayusculas = nombres.map((nombre) => {
  return nombre.toUpperCase();
});
console.log(nombresMayusculas);
//filter
const nombres4letras = nombres.filter((nombre) => {
  if (nombre.length === 4) {
    return nombre;
  }
});
console.log(nombres4letras);
//Includes
console.log(nombres.includes("Julio"));
console.log(nombres.includes("Carlos"));
//Every

const nombresValidos = nombres.every((nombre) => {
  if (typeof nombre === "string") {
    return true;
  } else {
    return false;
  }
});
console.log("Todo los nombres son validos? " + nombresValidos);
// Some
const algunosNombresValidos = nombres.some((nombre) => {
  if (typeof nombre === "string") {
    return true;
  } else {
    return false;
  }
});
