//Triangle

//Class Line
const Line = require ('../../libs/occm/geometry/ClassLine')

//Class Point
const Point = require ('../../libs/occm/geometry/Point')

a = new Point(3,4)
b = new Point(-3,-4)
NuevaLinea = new Line(a, b)


c = new Point(4,5)
d = new Point(-4,-5)
NuevaLinea2 = new Line(c, d)


e = new Point(6,7)
f = new Point(-6,-7)
NuevaLinea3 = new Line(e, f)


console.log(NuevaLinea.toString())
console.log(NuevaLinea1.toString())
console.log(NuevaLinea3.toString())
