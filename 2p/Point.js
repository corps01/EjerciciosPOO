class Point{
    constructor(x,y)
    this.x = x;
    this.y = y;
    print('constructor');

};

toString(){
    return "("+this,x+ "," + this.y+")";};
distance(p){};
clone(){return new Point(this.x,this.y);};
