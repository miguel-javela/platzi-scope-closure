//en este ejemplo de las clases pasadas cuando usabamos var estabamas haciendo un clousure
//aunque no estaba funcionando bien
const anotherFunction = () => {
    for (var i=0; i <10; i++){
        setTimeout(() => {
            console.log(i);
        },1000)
    }
};
anotherFunction();

//asi funciona bien
const anotherFunction1 = () => {
    for (let i=0; i <10; i++){
        setTimeout(() => {
            console.log(i);
        },1000)
    }
};
anotherFunction();