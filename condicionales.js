const usuario = {
  nombre: "Carlos",
  edad: 21,
  pais: "Mexico",
  ticket: true,
};
// if (usuario.edad >= 18) {
//   console.log(
//     "El usuario es mayor de edad y puede entrar al concierto: " + usuario.nombre
//   );
// } else {
//   console.log("El usuario es menor no puede pasar");
// }
if (usuario.edad >= 18 && usuario.ticket == true) {
  console.log("El usuario puede pasar");
} else {
  console.log("El usuario no puede pasar");
}
