//arabe => romano
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

//romano => arabe
let y = function(list) {
    return list.map(function(romano){
        switch (romano) {
            case I:
            return 1;
            break;

            case I:
            return 1;
            break;

            case I:
            return 1;
            break;

            case I:
            return 1;
            break;

            case I:
            return 1;
            break;

            case I:
            return 1;
            break;

            case I:
            return 1;
            break;

            case I:
            return 1;
            break;

            case I:
            return 1;
            break;

            case I:
            return 1;
            break;
        } 
    });
};



let romano = [III, XXXI, VI,];
let arabe = [3,2,4,5]

console.log(x(array));
