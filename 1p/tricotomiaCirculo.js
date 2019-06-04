
print("Ingresa el radio del circulo");
var radio = Number(readline());


print("Ingresa el valor de la coordenada X: ");
var x = Number(readline());

print("Ingresa el valor de la coordenada Y: ");
var y = Number(readline());

//encontrar diamtro
radio = radio * 2;
print("El diamtro es de: " + radio);

//encontrar la hipotenusa
var h = ((x*x) + (y*y));
h = Math.sqrt(h)
print("La hipotenusa es de: " + h);
	

if(h > radio){
	print("el punto esta fuera");
}else{

	if(h < radio){
		print("el punto esta dentro");
				}

} 

if (h === radio) {
	
	print("el punto esta sobre")

}
