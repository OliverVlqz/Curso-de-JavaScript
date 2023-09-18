// const saludo = (nombre = "amigo") => {
//   console.log(`Hola ${nombre}!`);
// };
// saludo("Carlos");
// saludo("Alex");
// saludo();

//Multiples parametros
const operacion = (tipo, numero1, numero2) => {
  if (tipo == "suma") {
    console.log(numero1 + numero2);
  } else {
    console.log(numero1 - numero2);
  }
};
operacion("suma", 2, 5);
operacion("resta", 4, 2);
