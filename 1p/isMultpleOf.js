function isMultiple(a,b){
		if (a % b == 0)
        return(a + " es multiple de " + b); 

		else
			return(a + " no es multiple de " + b); 
}


print(isMultiple(10,5))
