//
const operacion = (tipo, numero1, numero2) => {
  let resultado;
  if (tipo == "suma") {
    resultado = numero1 + numero2;
  } else {
    resultado = numero1 - numero2;
  }
  return resultado;
};

const operacion2 = (tipo, numero1, numero2) => {
  if (tipo == "suma") {
    return numero1 + numero2;
  } else {
    return numero1 - numero2;
  }
};

const miVariable = operacion("suma", 100, 11);
console.log(miVariable);
