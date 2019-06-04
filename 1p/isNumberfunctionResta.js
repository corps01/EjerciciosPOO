function isNumber(x){
    if(typeof x === "number")
	return true;
    else
	return false;
}

function echo(a,b){
    if (isNumber(a) && isNumber(b))
    return a-b;
    else
    	print("Solo se pueden restar numeros");
}

print(echo(-3,2));
