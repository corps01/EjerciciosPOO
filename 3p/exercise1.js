let x = function(list) {
    return list.map(function(number){
        if(number === 1){
            return "C";
        }else if(number === 2){
            return "B";
    
        }else if(number === 3){
        return "A";
        }
        else if(number >= 4){
            return "UNDEFINED";
            }
    });
};

let array = [3,2,1,5];
console.log(x(array));
