//kilometros millas
function convert_1() {

let t = document.getElementById("input_1").value
	t = Number(t)
	if (typeof t !== 'number') {
		alert("INTRODUZCA UN NUMERO")
	} else {

    let result = t / 1.609
    document.getElementById("fuera1").innerHTML = result.toFixed(2) + " Millas"
    
	}
}

//millas kilometros
function convert_2() {
	let t = document.getElementById("input_2").value
    t = Number(t)

	if (typeof t !== 'number') {
		alert("INTRODUZCA UN NUMERO")
	} else {

	let result = t * 1.60934

    document.getElementById("fuera2").innerHTML = result + " Kilometros"
	
	}

}
