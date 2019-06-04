class Point{
    constructor(x,y){        
        if(Number.isInteger(x) && Number.isInteger(y)){
        this.x = x;
        this.y = y;
    }
    else{
        throw new Error("Porfavor ingrese un numero Int")
        }
    
};

toString(){
    return "(" + this.x + "," + this.y+ ")" ;
};

distance(punto2){
    return((this.x - punto2.x) + (this.y - punto2.y))  
};

suma(){

    p = (this.x + punto2.x) + (this.y + punto2.y)
    return(p)  
}

multi(p){
    let m = (this.x * p.x) + (this.y * p.y)
    return(m)  
}



clone(){
    return new Point(this.x,this.y);
};

gcd() {
    //base cases
    if(this.x === 0) { return this.y;}
    if(this.y === 0) { return this.x;}

    // decrease and conqure - recursion
    return (this.y, this.x % this.y);
};



}

let omar = new Point(4, 20)

let mannt = new Point (2,4)

console.log(omar.distance(mannt))

module.exports = Point