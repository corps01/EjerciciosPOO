//a named function declaration : most common one
function foo(){
    console.log('Called foo!'); //prints Called foo!
}

//an anonymous function exxpression
var bar = function (){
    console.log('Called bar!'); //prints Called bar!
}

//an anonymous iife function
(function (){
    console.log('this function is invoked inmediately!');
})();
