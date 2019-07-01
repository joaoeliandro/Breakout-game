function Block(x, y) {
    this.eixo_x = x + 50
    this.eixo_y = y + 160
    this.largura = 80
    this.altura = 40
    this.top = this.eixo_x - this.largura / 2
    this.bottom = this.eixo_x + this.largura / 2
    this.colorR = random(255)
    this.colorG = random(255)
    this.colorB = random(255)

    this.show = function () {
        rectMode(CENTER)
        fill(this.colorR, this.colorG, this.colorB)
        rect(this.eixo_x, this.eixo_y, this.largura, this.altura)
    }
}