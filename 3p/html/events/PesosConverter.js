//
// this may be a class, object, module, or function
//
function convert_E2D() {

let t = document.getElementById("Euros").value

	if (t === '') {
		alert("INTRODUZCA UN NUMERO")
	} else {

    let result = t * 1.12;
    document.getElementById("fueraDollar").innerHTML = result.toFixed(2) + " Dollars"
    
	}
}


function convert_D2E() {

	let t = document.getElementById("Dollars").value

if (t==="") {
	alert("INTRODUZCA UN NUMERO")
	} else {
	
	let result = t * 0.89;
    document.getElementById("fueraEuro").innerHTML = result.toFixed(2) + " Euros"
	
	}

}
