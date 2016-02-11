// Enemies our player must avoid
var Enemy = function(y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = y || 50;
    this.speed = speed || 20;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   this.x = this.x < 505 ? this.x + dt*this.speed : 0;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png'
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function(){
    for(var i=0; i<allEnemies.length; i++){
        if(allEnemies[i].x === this.x && allEnemies[i].y === this.y){
            this.x = 200;
            this.y = 400;
        }
    }
    return this;
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyCode){
    switch(keyCode){
        case 'left':
            this.x = this.x - 89 > 0 ? this.x - 89 : 1;
            break;
        case 'right':
            this.x = this.x + 89 < 400 ? this.x + 89 : 400;
            break;
        case 'up':
            this.y = this.y - 89 > 0 ? this.y - 89: 1;
            break; 
        case 'down':
            this.y = this.y + 89 < 430 ? this.y + 89 : 430;
            break;    
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

allEnemies[0] = new Enemy();
allEnemies[1] = new Enemy(100,100);
allEnemies[2] = new Enemy(200,300);
// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
