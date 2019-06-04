let x = function(list) {
    return list.map(function(number){
        return number*number;
    });
};

let array = [5,4,3,2,1];
console.log(x(array));
