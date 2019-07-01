var score
var player
var blocks = []
var ball
var clicou = false

function createBlocks() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 11; j++) {
            blocks.push(new Block(j * 80, i * 45))
        }
    }
}

function mouseClicked() {
    clicou = true
}

function setup() {
    createCanvas(900, 600)
    player = new Player()
    ball = new Ball()
    score = new Score()
    createBlocks()
}

function draw() {
    background(0)
    player.move()
    player.show()

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].show()
        if (ball.collision(blocks[i])) {
            ball.velocidade_y = - ball.velocidade_y
            blocks.splice(i, 1)
            if (blocks.length < 28)
                score.scorePoint(100)
            else
                score.scorePoint(10)
        }
    }

    if (clicou) {
        score.play = 'Pause'
        ball.move()

        if (ball.collision(player)) {
            ball.velocidade_y = - ball.velocidade_y
        }

        if (ball.collision(score)) {
            ball.velocidade_y = - ball.velocidade_y
        }

        if (ball.eixo_y < 0) {
            ball.velocidade_y = - ball.velocidade_y
        }
    }

    if (blocks.length === 0) {
        score.play = 'Play'

        fill(255)
        textFont('Arial')
        textSize(60)
        text('End Game!', 450, 300)

        clicou = false
    }

    if (ball.gameover()) {
        score.scoreZero()
        clicou = false
    }

    ball.show()
    score.show()
}