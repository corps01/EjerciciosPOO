function isDivisible(a,b){
		if (a % b == 0)
        return( a + " es divisible por " + b ); 

		else
			return(a + " no es divisible por " + b ); 
}


print(isDivisible(3,6))