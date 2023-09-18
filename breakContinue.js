const nombres = ["Arturo", "Juan", "Carlos", "Ana", "Pedro", "Maria"];
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i][0] !== "A") {
    console.log("Hay un nombre que no empieza con A, el programa se detiene");
    console.log(nombres[i] + " no empieza con A");
    break;
  }
  console.log(nombres[i]);
}
// Continue
const invitados = ["Arturo", "Cristian", "Carlos", "Ana", "Pedro", "Maria"];
console.log("Lista de invitados");
for (let i = 0; i < invitados.length; i++) {
  if (invitados[i] == "Arturo") {
    continue;
  }
  console.log(invitados[i]);
}
