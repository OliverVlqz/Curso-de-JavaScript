const usuario = {
  nombre: "Carlos",
  pais: "Mexico",
};
switch (usuario.pais) {
  case "Mexico":
    console.log("El usuario es mexicano");
    break;
  case "Argentina":
    console.log("El usuario es argentino");
    break;
  default:
    console.log("No tiene nacionalidad  ");
}
