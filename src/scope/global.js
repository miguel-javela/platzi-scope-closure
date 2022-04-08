var hello = 'hello';
var hello = 'hello +';// se puede reasignar usando el var, es una mala practica
let world = 'world';
//let world = 'world +';//con let la palabra reservada ya esta asignada y no se puede asignar con let
const helloworld = 'hello world';

const anotherFuntion = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFuntion();

//esto es una mala practica
helloworld = () => {
    globalVar = 'i am global'
}
helloworld();
console.log(globalVar)


//doble asignacion de variables, tambien es una mala practica, genera una variable global
anotherFuntion = () => {
    var localvar = globalVar = 'im global'
}
anotherFuntion();
console.log(globalVar)