var aPoint = {
    x:3,
    y:4,
    distancia:function(bPoint){
    var d1 = bPoint.x-x
    var d2 = bPoint.y-y
    d1=d1**2
    d2=d2**2
    return Math.sqrt(d1+d2);
}
    
}
​
​
var bPoint = {
    x:-3,
    y:-4,
​
    distancia:function(aPoint){
    var d1 = x-aPoint.x
    var d2 = y-aPoint.y
    d1=d1**2
    d2=d2**2
    return Math.sqrt(d1+d2);
    }
    
}
​
