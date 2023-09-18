const usuario = {
  nombre: "Carlos",
  edad: 27,
  amigos: ["Alejandro", "Cesar", "Manuel"],
  saludo: () => {
    console.log("Hola");
  },
};

// Metodos propios
usuario.saludo();
// Keys
resultados = Object.keys(usuario);
console.log(resultados);
// Object.values
const resultadoValues = Object.values(usuario);
console.log(resultadoValues);
//Entries
const resultadoEntries = Object.entries(usuario);
console.log(resultadoEntries);
