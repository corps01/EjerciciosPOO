function isInt(n){
	if(n % 1 != 0)
		return true
	else
		return false
}

print(isInt(1.3))
print(isInt(1))