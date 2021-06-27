function Rectangulo(base, altura) {
    this.base = base
    this.altura = altura
}

Rectangulo.prototype.calcularArea = () => {
    return this.base * this.altura
}