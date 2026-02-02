/* 
G. Spencer Barkman
Super Rocket Patrol
Took 8 Hours
Total Points: 20/20

1 Point Mods: 
Implement the 'FIRE' UI text from the original game (1)
Allow the player to control the Rocket after it's fired (1)
Implement the speed increase that happens after 30 seconds in the original game (1)
Add your own (copyright-free) looping background music to the Play scene (1)

3 Point Mods:
Create 4 new explosion sound effects and randomize which one plays on impact (3)
Display the time remaining (in seconds) on the screen (3)

5 Point Mods:
Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)

Copyright Free Music: "Game 8 Bit Medium" by moodmode
*/


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