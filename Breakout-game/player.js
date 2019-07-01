function Player() {
    this.eixo_x = width / 2
    this.eixo_y = height - 20
    this.largura = 180
    this.altura = 15
    this.velocidade = 5
    this.top = this.eixo_x - this.largura / 2
    this.bottom = this.eixo_x + this.largura / 2

    this.show = function () {
        rectMode(CENTER)
        fill(145, 145, 145)
        rect(this.eixo_x, this.eixo_y, this.largura, this.altura)
    }

    this.move = function () {
        if (keyIsPressed) {
            if (this.eixo_x <= 800) {
                if (keyCode === RIGHT_ARROW) {
                    this.eixo_x += this.velocidade
                }
            } else {
                console.log('limite a direita')
            }
            if (this.eixo_x >= 100) {
                if (keyCode === LEFT_ARROW) {
                    this.eixo_x -= this.velocidade
                }
            } else {
                console.log('limite a esquerda')
            }
        }

        this.top = this.eixo_x - this.largura / 2
        this.bottom = this.eixo_x + this.largura / 2
    }
}