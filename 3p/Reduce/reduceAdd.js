//sum
const myArray = [22,9,60,12,4,56];
const sum = (x,y) => x+y;
const mySum = myArray.reduce(sum,0);

//multiplier
var array = [4,8,15,16,23,42];
var mul = function(a,b){return a*b;};
array.reduce(mul,1);

//average
const myArray = [22,9,60,12,4,56]
const sum =(x,y) => x+y
const avg = myArray => myArray.reduce(sum,0)/myArray.length
console.log(avg(myArray))

//both
const myArray = [22,9,60,12,4,56];
const avg = arr => {
    const sc = arr.reduce((ac,val)=>[ac[0]+val, ac[1]+1],[0,0])
    return sc[0]/sc[1]
}
console.log(avg(myArray))

//reducee
function reduce(array, apply, start){
    let current =start;
    for (let element of array){
        current = apply(current, element);
    }
    return current;
}
console.log(reduce([1,2,3,4],(a,b) => a + b,0));