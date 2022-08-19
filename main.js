/* //1
function operaciones(x, z) {
  if (x < z) {
    return z / x;
  } else {
    return x * z;
  }
}

console.log(operaciones(2, 3));

//2
function queEs(a) {
  return typeof a;
}
console.log(queEs(1));

//3
function masOperaciones(a, b, c, d, e, f) {
    let z = a+b;
    let x = z-c;
    let y = x * d;
    let t = y / e;
    let u = t ** f;
  return u
}

console.log(masOperaciones(5,7,6,8,4,3)); */

//4

/* const personas = [
  "Pedro",
  "Juan",
  "Sabrina",
  "Sebastian",
  "Agustin"
]

function array(a){
  arrayDos=[];
  arrayDos = a.splice(-3)
  return arrayDos
}

console.log(array(personas)); */

//5

/* const arrayStr = ["cesar", "brandon", "Ana"];
const arrayInt = [ 40, 1, 5, 200 ]

function queEs(a) {
  return typeof a;
}
console.log(queEs(arrayStr[0]))

function order(arr){
  if (queEs(arr[0]) === "string"){
    return arr.sort()
  } else {
    function comparar ( a, b ){ return b - a; }
    return arr.sort( comparar );
  }
}

console.log(order(arrayInt)) */

//6

/* const arreglo = ["Hugo", "Sebastian", "Flor"];

function remove(a, b) {
  for (let index of a) {
    if (index == b) {
      a.splice(a.indexOf(b),1)
    }
  }
  return a
}

console.log(remove(arreglo, "Hugo")); */

//7
/* let arregloInt = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let suma = 0
function sumaNum(a) {
  for (let index of a) {
    suma += index;
    console.log(suma);
  }
}
sumaNum(arregloInt); */

//8
/* const alumno = {
  nombre: "Sebastian",
  apellidos: "Prieto",
  usuarioGithub: "SebaGPDev",
};

function mostrar(a, b) {
  for (let llave in a) {
    if (llave === b) {
      return a[llave];
    }
  }
}

console.log(mostrar(alumno, "usuarioGithub")); */

//9

/* let compra = {
  pan: 300,
  queso: 500,
  salame: 500,
  tomate: 120,
};

let sum = 0;

Object.entries(compra).forEach(([key, val]) => {
  sum += val;
});
console.log(sum); */