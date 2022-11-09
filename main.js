const game = {
    init: function () {
        // Initialize the game
        //read game variables from data/game.json
        fetch('data/game.json')
            .then(response => response.json())
            .then(data => {
                //destructure the data onto the game object
                Object.assign(game, data);
            })

        game.c = document.getElementById("game");
        //set canvas dimensions to 1/5 of window dimensions, rounded down
        game.width = Math.floor(window.innerWidth / this.pixelRatio);
        game.height = Math.floor(window.innerHeight / this.pixelRatio);
        game.ctx = game.c.getContext("2d");
        game.lastTime = Date.now();
        game.player = player.init();
        gameLoop();
    }
}

const player = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    speed: 0,

    init: function () {
        // Initialize the player
        //read player stats from data/player.json
        fetch('data/player.json')
            .then(response => response.json())
            .then(data => {
                Object.assign(player, data);
            }
            );
    },
    update: function (dt) {
        // Update the player
    },
    render: function (ctx) {
        // Render the player
        
        ctx.fillStyle = "red";
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    const now = Date.now();
    game.dt = (now - game.lastTime) / 1000;
    game.lastTime = now;
    // update
    update(game.dt);
    // render
    render(game.dt, game.ctx);

}

function update(dt) {
    // update game state
}

function render(dt, ctx) {
    // render game state
    ctx.fillStyle = game.backgroundColor;
    ctx.fillRect(0, 0, game.c.width, game.c.height);
    player.render(game.ctx);

}   

game.init();