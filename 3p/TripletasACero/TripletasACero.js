function arr() {

    let numbers = (document.getElementById('nums').value)
    numbers = numbers.split(" ").map(Number);
    alert(numbers.length)
    let cero = false
    let imprimir = ""
    let ciclos = 0

	    for(let i = 0;i <= numbers.length - 2; i++){

	        for(let j = i+1;j <= numbers.length -1; j++){
	                    
	            for(let k = j+1;k <= numbers.length; k++){

	            	if ((numbers[i] + numbers[j] + numbers[k]) === 0) {
	            		cero = true;
	            		imprimir = numbers[i] +", " +numbers[j] +", "+ numbers[k]
	            	}
	                
	            }   
	        }
	    }

if (cero) {
	document.getElementById("output").innerHTML = imprimir
} else {
	document.getElementById("output").innerHTML = "NO SE ENCONTRARON TRIPLETAS"
}
   

}