var ball;
var database;
var position;

function setup(){

    bg = loadImage("cityImage.png");

    ballImg2 = loadImage("hotairballoon2.png");

    database = firebase.database();
    //console.log(database);

    createCanvas(1535,740);
    ball = createSprite(0,0,10,10);
    ballImg = loadImage("hotairballoon1.png");
    ball.addImage(ballImg);

    var ballPosition = database.ref('Ball/Position');
    ballPosition.on("value",readPosition,showError);

   
    ball.scale = 0.8
}

function draw(){
    background(bg);
    if(position!==undefined)
    {

    

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

function readPosition(data)
{
 position = data.val();
 //console.log(position.x);

 ball.x = position.x;
 ball.y = position.y;
}


function writePosition(x,y)
{
    database.ref('Ball/Position').set({
    
    'x' : position.x + x ,
    'y' : position.y + y 
    })

}

function updateHeight(x,y)
{
    database.ref('Ball/Height').set({
        'x' : height.x+x ,
        'y' : height.y+y
    })
}

function showError()
{
    console.log("This Is A Database Error");
}

if(keyDown(UP_ARROW))
{
    ball.scale = 0.2;
}