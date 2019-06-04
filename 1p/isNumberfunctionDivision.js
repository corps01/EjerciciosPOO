function isNumber(x){
    if(typeof x === "number")
	return true;
    else
	return false;
}

function isZero(y){
    if (y === 0)
	return false;
    else
	return true;
}

//operaciones

function echo(a,b){
    if ((isNumber(a) && isNumber(b)) && (isZero(a) && isZero(b)))
    return a/b;
    else
    	print("Solo se pueden dividir numeros mayor a 0");
}

print(echo(10,2));
