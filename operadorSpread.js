const frutas = ["Manzana", "Banana", "Pera", "Naranja", "Mandarina"];
const comidaFavorita = ["Pizza", "Sushi", ...frutas];
console.log(comidaFavorita);
const datosLogin = {
  nombre: "Arturo",
  correo: "correo@correo.com",
  password: "123456",
};
const usuario = {
  nombre: "Juan",
  ...datosLogin,
  edad: 20,
};
console.log(usuario);

//Rest
const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
  console.log(nombre, correo, datosAdicionales);
};
registrarUsuario("Carlos", "correo@correo.com");
registrarUsuario("Alejandro", "alexcorreo.com", 28, "España");

//Destructuracion de objetos
const amigos = ["Alejandro", "Manuel", "Cesar", "Manuel"];
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;

console.log(primerAmigo);

const persona = {
  nombre: "Arturo",
  edad: 20,
  pais: "Mexico",
};
const { nombre, pais, edad } = persona;
console.log(nombre, pais);

const mostrarEdad = ({ nombre, edad }) => {
  console.log(`${nombre} tiene ${edad} años`);
};
mostrarEdad(persona);
