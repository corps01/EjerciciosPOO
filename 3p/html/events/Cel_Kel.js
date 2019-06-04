//
// this may be a class, object, module, or function
//
function convert_1() {

let t = document.getElementById("input_1").value
	t = Number(t)
	if (typeof t != 'number') {
		alert("INTRODUZCA UN NUMERO")
	} else {

    let result = t - 273.1
    document.getElementById("fuera1").innerHTML = result.toFixed(2) + " C"
    
	}
}


function convert_2() {
	let t = document.getElementById("input_2").value
    t = Number(t)

	if (typeof t != 'number') {
		alert("INTRODUZCA UN NUMERO")
	} else {

	let result = t + 273.15

    document.getElementById("fuera2").innerHTML = result + " K"
	
	}

}
