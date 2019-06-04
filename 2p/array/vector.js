class Vector{
        constructor(D){
        let D = [];
    };


vectorize(a,b,k){

let count = 0
let i = (Math.abs(a-b))/k;
    for(j=0;j<k;j++){
        let count = count + i;
        this.D.push(a);
        }
};

initialize(v,n) {

    for(j=0;j<n;j++){
        this.D.push(v);
        }

};

min() {
    let t = 0
    for (let x of this.D) {
        if (t>x)
        t=x
    }
    
    return(t)

};


max() {
    let t = 0
    for (let x of this.D) {
        if (t<x)
        t=x
    }
    
    return(t)

};


sum() {
    let t = 0
    for (let x of this.D) {
        t=+x
    }
    
    return(t)

};


avg() {
    let t = 0
    for (let x of this.D) {
        t=+x
    }
    t = t/this.D.length
    return(t)
};


}