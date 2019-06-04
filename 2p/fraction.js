class Fraction {
      constructor(n,d) {
      		    this.n=n;
		    this.d=d;
	};

 mul(f) {
 	var n = this.n * f.d;
	var d =this.d *f.d;
     return new Fraction(n,d);
 };
    
};
