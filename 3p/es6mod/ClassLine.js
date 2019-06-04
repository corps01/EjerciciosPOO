class Line {
    
    constructor ( pointA, pointB) {
       let Point = require ('./Point')  
        if (pointA instanceof Point && pointB instanceof Point){
            this.pointA = pointA
            this.pointB = pointB
        }else{
                throw new Error("Porfavor Ingrese Objetos de la clase Point")
                }
    }

    toString(){
        return "pointA: (" + this.pointA.x + "," + this.pointA.y + ")" + "pointB: (" + this.pointB.x + "," + this.pointB.y + ")"
    }
}

module.exports = Line



