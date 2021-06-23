//Como se hacia antes
function Rectangulo(base, altura){
    this.base = base
    this.altura= altura

}

Rectangulo.prototype.calcularArea = function(){
    return this.base * this.altura
}

var rectangulo = new Rectangulo(6, 8)

console.log(rectangulo.calcularArea())
console.log(rectangulo.base)

//Declaracion e Clases

class Rectangulo2(){
    contructor(base, altura){
        this.base = base
        this.altura = altura
    }

    calcularArea(){
        return this.base * this.altura
    }
}

var rectangulo2 = new Rectangulo2(6, 3)
console.log(rectangulo2.calcularArea)
