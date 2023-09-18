var nombre = "Carlos";
console.log(nombre);
const saludo = () => {
  console.log("Hola" + nombre);
  nombre = "Arturo";
  console.log("El nuevo nombre es: " + nombre);
};
