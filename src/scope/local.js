//scope local
const helloWorld = () => {
    const hello = 'hello';//esta variable solo se puede acceder dentro de esta funcion
    console.log(hello);
};
helloWorld();

//ambito lexico
var scope = 'im global';
const funcitonScope = () => {
    var scope = "i am just a local variable"
    const func = () => {
        //esta variable hace referencia a la de la linea 11 que es locla de la funcion y no a la de la linea 9 que es global
        return scope
    };
    console.log(func());
};
funcitonScope();
console.log(scope);