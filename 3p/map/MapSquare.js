let Square  = function(list) {
    return list.map(function(number){
        return Math.pow(number,2);
    })
}
 let a=[5,4,3,2,1];
 console.log(Square(a));