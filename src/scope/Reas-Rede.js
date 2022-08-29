var firstName; // Undefined
firstName = "Miguel";
console.log(firstName);


var lastName = "Angel"; // declarar / asignar
lastName = "Arias"; // reasignado
console.log(lastName); 

var secondName = "David"; // declarar / asignar
var secondName = "Ana"; //reasignar
console.log(secondName);

// Let
let fruit = "Apple"; //declarar y asignar
fruit = "Kiwi": //reasignar

let fruit = "Banana"; // Cannot redeclare block-scope variable "fruit".


// Const
const animal = "dog"; // declarar y asignar
animal = "cat"; // no podemos reasignar y redeclarar variables con const
console.log(animal);

// cuando hablamos de arreglos y objetos, sí que podemos agregar o eliminar elementos, ya que no estamos redefiniendo ni redeclarando
const vehicles = [];
vehicles.push("Carrito");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);