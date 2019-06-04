function isZero(arg){
    if (arg===0)
	throw new Error("ZERO DIV");
    else
	return arg;
}

print(isZero(5));
isZero(0);


