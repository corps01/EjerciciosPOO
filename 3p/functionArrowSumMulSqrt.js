//suma
const sum = (a,b) => typeof(a) === 'number' && typeof(b) === 'number' ? a + b: console.log('Valor incorrecto');

//multi
const mul = (a,b) => typeof(a) === 'number' && typeof(b) === 'number' ? a * b: console.log('Valor incorrecto');

//square
const square = (a) => typeof(a) === 'number' ? a * a: console.log('Valor incorrecto');

//cube
const cube = (a) => typeof(a) === 'number' ? a * a * a : console.log('Valor incorrecto');

//sqrt

const sqrt = (a) =>{
    let x
    let x1 = a / 2;
        
    do {
        x = x1;
        x1 = (x + (a / x)) / 2;
    } while (x !== x1);
    return x.toFixed(4);
}