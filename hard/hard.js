class pii{

    #name;
    #ssn

    constructor(name, ssn){
        this.#name = name;
        this.#ssn = ssn;
    }
    getName(){
        return this.#name;
    }
}

var p1 = new pii("John", "000-00-0000")
var p2 = new pii("Moreno", "123-45-6789")

console.log(p1.getName());