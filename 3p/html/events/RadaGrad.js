//rad a grados 
function convert_1() {

let t = document.getElementById("input_1").value
	t = Number(t)
	if (typeof t !== 'number') {
		alert("INTRODUZCA UN NUMERO")
	} else {

  	result = t * 180 / Math.PI;
    
    document.getElementById("fuera1").innerHTML = result.toFixed(2) + " Grados"
    
	}
}

//grados a radianes
function convert_2() {
	let t = document.getElementById("input_2").value
    t = Number(t)

	if (typeof t !== 'number') {
		alert("INTRODUZCA UN NUMERO")
	} else {

	let result = t * Math.PI / 180;

    document.getElementById("fuera2").innerHTML = result + " Radianes"
	
	}

}
