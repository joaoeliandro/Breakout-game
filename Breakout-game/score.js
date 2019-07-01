function Score() {
    this.eixo_x = width / 2
    this.eixo_y = 15
    this.largura = width
    this.altura = 60
    this.top = this.eixo_x - this.largura / 2
    this.bottom = this.eixo_x + this.largura / 2
    this.play = 'Play'
    this.score = 0

    this.show = function () {
        rectMode(CENTER)
        fill(100, 100, 100)
        rect(this.eixo_x, this.eixo_y, this.largura, this.altura)

        fill(230)
        rect(70, this.eixo_y + 7, 100, 40, 10)

        fill(0)
        textFont('Arial')
        textSize(30)
        text(this.play, 70, this.eixo_y + 18)

        var message = 'Score: ' + this.score

        fill(255)
        textFont('Georgia')
        textSize(30)
        textAlign(CENTER)
        text(message, 820, this.eixo_y + 15)

        fill(255, 0, 0)
        textFont('Arial')
        text('BREAKOUT GAME', this.eixo_x, this.eixo_y + 18)
    }

    this.scorePoint = function (score) {
        this.score += score
    }

    this.scoreZero = function () {
        this.score = 0
        this.play = 'Play'
    }
}