//Class Line
const Line = require ('./ClassLine')

//Class Point
const Point = require ('./Point')

a = new Point(3,4)
b = new Point(-3,-4)

NuevaLinea = new Line(a, b)

console.log(NuevaLinea.toString())


