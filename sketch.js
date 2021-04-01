var plr, plr_running;
var bg, bgImage;
var monster_dead;
let input, button, greeting;

var PLAY = 1
var START = 0;
var END = 2;
var gameState = START;
var start_button

function preload() {
    plr_running = loadAnimation("plr/walk1.png", "plr/walk2.png", "plr/walk3.png", "plr/walk4.png", "plr/walk5.png", "plr/walk6.png");

    plr_dead = loadAnimation("plr_dead/death1.png", "plr_dead/death2.png", "plr_dead/death3.png", "plr_dead/death4.png", "plr_dead/death5.png", "plr_dead/death6.png");


    monster_running = loadAnimation("monster/walk1.png", "monster/walk2.png", "monster/walk3.png", "monster/walk4.png", "monster/walk5.png", "monster/walk6.png");

    monster_dead = loadAnimation("monster_dead/death1.png", "monster_dead/death2.png", "monster_dead/death3.png", "monster_dead/death4.png", "monster_dead/death5.png", "monster_dead/death6.png", "monster_dead/death7.png", "monster_dead/death8.png", "monster_dead/death9.png");

    bgImage1 = loadImage("layers/back_decor.png");
    bgImage2 = loadImage("layers/back_land.png");
    bgImage3 = loadImage("layers/battleground.png");
    bgImage4 = loadImage("layers/front_decor.png");
    bgImage5 = loadImage("layers/ground_decor.png");

    dedicatedCImage = loadImage("words/dedicatedC.png");
//spellingCorrect
 conscious = loadImage("spelling-correct/conscious.png")
 continent  = loadImage("spelling-correct/continent.png")
 dedicated  = loadImage("spelling-correct/dedicated.png")
embarrass = loadImage("spelling-correct/embarrass.png")
 endanger =  loadImage("spelling-correct/endanger.png")
lilac = loadImage("spelling-correct/lilac.png")
 persuade = loadImage("spelling-correct/persuade.png")
 questionnaire =  loadImage("spelling-correct/questionnaire.png")
 ridiculous=  loadImage("spelling-correct/ridiculous.png")
// //spellingWrong
consciuos = loadImage("spellings-wrong/consciuos.png")
contenent = loadImage("spellings-wrong/contenent.png")
didecated = loadImage("spellings-wrong/didecated.png")
 embarass = loadImage("spellings-wrong/embarass.png")
endenger = loadImage("spellings-wrong/endenger.png")
 lillac = loadImage("spellings-wrong/lillac.png")
 persaude = loadImage("spellings-wrong/persaude.png")
 questionire = loadImage("spellings-wrong/questionire.png")
rideculous = loadImage("spellings-wrong/rideculous.png")


// math 
 m0X94_0 = loadImage("math/0 x 94 _ 0.png")
// m1X79 = loadImage("math/79.png")
// m3X7=24 = 
// m6X12


}

function setup() {
    createCanvas(1600, 800);
    //create ground sprite

    bg2 = createSprite(200, 200, 400, 20);
    bg2.addImage(bgImage2);
    bg2.scale = 0.6
    bg2.velocityX = -2;

    bg3 = createSprite(200, 200, 400, 20);
    bg3.addImage(bgImage3);
    bg3.scale = 0.6

    bg3.velocityX = -3;

    bg4 = createSprite(200, 100, 400, 20);
    bg4.addImage(bgImage4);
    bg4.scale = 0.6

    bg4.velocityX = -2;

    bg1 = createSprite(200, 100, 400, 20);
    bg1.addImage(bgImage1);
    bg1.scale = 0.5

    bg1.velocityX = -3

    bg5 = createSprite(200, 200, 400, 20);
    bg5.addImage(bgImage5);
    bg5.scale = 0.5

    bg5.velocityX = -3;

    clif1 = createSprite(200, random(150, 350), 400, 20);
    clif1.addImage(dedicatedCImage);
    clif1.scale = 0.5

    clif1.velocityX = -3;
    // clif1.debug = true;

    //create a trex sprite
    plr = createSprite(150, 320, 20, 50);
    plr.addAnimation("running", plr_running);
    plr.addAnimation("dead", plr_dead);
    plr.setCollider('circle', 0, 0, 50)
    plr.visible = false;
    //adding scale and position to trex
    plr.scale = 0.9;
    plr.x = 250

    invisibleGround = createSprite(200, 390, 400, 10);
    invisibleGround.visible = false;
    //create a monster sprite
    monster = createSprite(50, 330, 20, 50);
    monster.addAnimation("Mwalk", monster_running);
    monster.addAnimation("Mdead", monster_dead);
    monster.debug = true
    monster.setCollider('circle', -20, 20, 5)
    monster.visible = false;

    input = createInput();
    input.position(700, height / 2 - 200);


    button = createButton('submit');
    button.position(input.x + input.width, 65);
    // create another button to start
    start_button = createButton("play")

    button.mousePressed(() => {
        const name = input.value();
        // greeting.html('hello ' + name + '!');
        // gameState = PLAY
        input.value('');
        input.hide();
        button.hide();
        greeting.html("Hi there! Welcome " + name + " This game will help you improve your math and spellings. A monster is chasing you and if you get any questions wrong, it will eat you up. The questions will be displayed and if the statement is correct, click on it. You will have 7 seconds so solve every question. An example is the math equation 8 x 3 = 24, this statement is correct therefore click on it. Another example is the spelling of the word imaginnation, it is spelt wrong thus do not click on it and simply ignore it. To pass this level, you have the get a certain amount of questions correct. If you do pass, get ready for a surprise! Click on the play button if you accept the challenge! ", 10, 200)
        start_button.position(width / 2 - 100, height / 2 - 200)

    });


    start_button.mousePressed(() => {
        // const name = input.value();
        // greeting.html('hello ' + name + '!');
        gameState = PLAY
            // input.value('');
            // input.hide();
            // button.hide();
        greeting.hide()
        start.hide()
        start_button.hide()
    });

    greeting = createElement('h2');
    greeting.position(20, 5);

    textAlign(CENTER);
    textSize(50);
}

function draw() {
    background("#f94144");


    if (gameState === PLAY) {
        plr.visible = true;
        camera.x = plr.x;
        camera.y = plr.y - 100;


        drawSprites();
        if (keyDown("space")) {
            plr.velocityY = -12
        }
        plr.velocityY += 0.8

        if (bg1.x < 0) {
            bg1.x = 1200;
        }

        if (bg2.x < 0) {
            bg2.x = 700;
        }

        if (bg3.x < 0) {
            bg3.x = 700;
        }

        if (bg4.x < 0) {
            bg4.x = 700;
        }

        if (bg5.x < 0) {
            bg5.x = 700;
        }

        if (clif1.x < 0) {
            clif1.x = 700;
        }
        plr.collide(invisibleGround)

    }

}