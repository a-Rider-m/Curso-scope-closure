//Hoisting es un término para describir que las declaraciones de variables y funciones son 
//Desplazadas a la parte superior del scope más cercano, scope global o de función.

/*
console.log(nameOfDog);

var nameOfDog = "Elmo";
*/

nameOfDog()

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = "Elmito";

