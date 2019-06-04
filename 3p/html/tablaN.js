var x = prompt("INGRESA UN VALOR :)");

let imprimir = ""
for(let i = 0; i <= 10; i++){

    imprimir = imprimir + (x*i) + "<br>";
}

document.getElementById("msg").innerHTML = imprimir;