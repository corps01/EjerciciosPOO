//export

class Car {
    constructor(name){
        this.name = name
    }

    drive(){

    }

    start(){return this.name + " engine started... " + "\n";}
    toString(){return 'Hi, My name is ' + this.name; }
        
    }

    export {Car}
    