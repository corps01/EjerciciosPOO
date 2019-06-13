function char() {
let texto = document.getElementById("texto").value;


document.getElementById("caracteres").innerHTML = "CARACTERES: " + texto.length

document.getElementById("palabras").innerHTML = "<br>"+ "</br>"+ "PALABRAS: " + (texto.split(" ").length - 1);

//sentencias 

let sentencias = (texto.split(",").length + texto.split(".").length + texto.split(";").length) - 3;

document.getElementById("sentencias").innerHTML = "<br>"+ "</br>"+ "SENTENCIAS:" + sentencias;


}