const texto = "Hola yo soy Carlos!";
const minusculas = texto.toLowerCase();
console.log(texto.length);
console.log(minusculas.indexOf("o"));
console.log(minusculas.lastIndexOf("o"));

//slice
console.log(texto.slice(minusculas.indexOf("c"), minusculas.lastIndexOf("!")));
console.log(texto.slice(-7, -1));
//replace
console.log(texto.replace("Carlos", "Arturo"));
//split
console.log(texto.split(" "));
