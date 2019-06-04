//Class Line
const Line = require ('../../libs/occm/geometry/ClassLine')

//Class Point
const Point = require ('../../libs/occm/geometry/Point')

a = new Point(3,4)
b = new Point(-3,-4)

NuevaLinea = new Line(a, b)

console.log(NuevaLinea.toString())


