// G. Spencer Barkman
// Super Rocket Patrol
// Took (6) Hours
// Total Points: 14/20
// * New Enemy Spaceship type (5 points)
// * 4 New Randomized Explosion SFX (3 points)
// * Display the time remaining (in seconds) on the screen (3)
// * Music to Play Scene (1 point)
// * Speed increase after 30 seconds(1)
// Randomize spaceship's direction (1)
// * Allow the player to control the Rocket after it's fired (1) 
// * Implement a new mechanism that adds time to the clock for successful hits and subtracts time for misses (5)


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config) 

let keyFIRE, keyRESET, keyLEFT, keyRIGHT

//setting UI sizes
let borderUISize = game.config.height/15
let borderPadding = borderUISize/3