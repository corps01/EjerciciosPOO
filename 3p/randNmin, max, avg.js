function rand() {
	//generar random
	let tempNum = 0
	let min = 100
	let max = 0
	let avg = 0
	let datos = ""

	let random = ""
	let n = document.getElementById('number').value
	alert(n)

	for(let i = 0; i < n; i++){

	tempNum = (Math.random() * 100) + 1;

	//MAX
	if (tempNum>max) {
		max = tempNum;
	}


	//MIN
	if (tempNum<min) {
		min = tempNum;
	}


	//AVG
	 avg += tempNum;

	//acumular variable
    random = random + "\n" + (tempNum).toString();

  }

  avg /= n;
  datos = "NUMERO MAXIMO: " + max + "\n" + "NUMERO MINIMO: " + min + "\n" + "PROMEDIO: " + avg


  document.getElementById("datos").innerHTML = datos;
  document.getElementById("output").innerHTML = random;


  
}