//anonymous

(function (x) { return x; }) (2);


//shadowy
(function (x) {
    return function (y){
        return x*y;
    };
})(2)(3);

//iife
(function hola(){
    console.log('Hola js mundo...');
    return 0;
})();

//iife
(function (x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
})(1)(2)(3);