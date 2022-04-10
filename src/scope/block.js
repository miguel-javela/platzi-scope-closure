const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        // var fruits2 = 'banana';
        // var fruits3 = 'kiwi';

        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        //con let y consten solo se establecen dentro del bloque

        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
    // console.log(fruits2);
    // console.log(fruits3);
};
fruits();

//ejemplo2
//let x = 1
var x = 1
{
    //let x = 2;
    var x = 2
    console.log(x);
}
console.log(x);

//ejemplo 3
const anotherFunction = () => {
    for (let i=0; i <10; i++){
        setTimeout(() => {
            console.log(i);
        },1000)
    }
};
anotherFunction();
//con var muestra 10 en todos los casos porque toma el ultimo valor
//mientras que con let como trabaja con el scope local toma cada asignacion