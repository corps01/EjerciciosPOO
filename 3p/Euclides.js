function euclides() {

  function gcd(a, b) {
    // base cases
    if(a === 0) { return b;}
    if(b === 0) { return a;}

    // decrease and conqure - recursion
    return gcd(b, a % b);
}

console.log(gcd(9, 6));
console.log(gcd(6, 9))



}