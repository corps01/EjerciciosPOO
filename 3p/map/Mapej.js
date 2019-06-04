
let exe = function(list){
    return list.map(function(number){
        if(number === 1){
            return "c";
        }else if(number === 2){
            return "b";
        }else if(number === 3){
            return "a"
        }else if(number >= 4){
            return "Undefined"
        }
    });
};
let a = [3,3,4,2,1,3];
console.log(exe(a));