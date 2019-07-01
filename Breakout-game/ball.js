var death = 0

function Ball() {
    this.eixo_x = width / 2
    this.eixo_y = height / 2 + 150
    this.radius = 20
    this.velocidade_x = 2
    this.velocidade_y = 2

    this.show = function () {
        fill(255)
        ellipse(this.eixo_x, this.eixo_y, this.radius, this.radius)
    }

    this.move = function () {
        this.eixo_x += this.velocidade_x
        this.eixo_y += this.velocidade_y

        if (this.eixo_x > width - 5 || this.eixo_x < 5) {
            this.velocidade_x = - this.velocidade_x
        }
    }

    this.collision = function (e) {
        if (this.eixo_y < e.eixo_y + e.altura / 2 && this.eixo_y > e.eixo_y - e.altura / 2) {
            if (this.eixo_x > e.top && this.eixo_x < e.bottom) {
                return true
            }
        }
        return false
    }

    this.gameover = function () {
        if (this.eixo_y === height + 30 || death > 0) {
            this.eixo_x = width / 2
            this.eixo_y = height / 2 + 150

            fill(200, 20, 20)
            rect(450, 280, 350, 100, 10)

            fill(255)
            textFont('Arial')
            textSize(60)
            textAlign(CENTER)
            text('Game Over!', 450, 300)
            death++
            return true
        }
        return false
    }
}