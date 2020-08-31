//Main Game Variables,Editable!!!
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;                             //Ball Radius
var x = canvas.width/2;                          //X Ball Position
var y = canvas.height-30;                        //Y Ball Position
var dx = 6;                                      //Ball Speed In X
var dy = -6;                                     //Ball Speed In Y
var paddleHeight = 25;                           //Paddle Height
var paddleWidth = 75;                            //Paddle Width
var paddleX = (canvas.width-paddleWidth)/2;      //Paddle X Position,Y Position Locked And Could Be Added!!!
var rightPressed = false;                        //If Right Key Pressed
var leftPressed = false;                         //If Left Key Pressed
var brickRowCount = 15;                          //Bricks Rows
var brickColumnCount = 5;                        //Bricks Columns
var brickHeight = 35;                            //Brick Height
var brickWidth = 75;                             //Brick Width                      
var brickPadding = 30;                           //Padding With Each Brick
var brickOffsetTop = 30;                         //Offset X Of Each Brick
var brickOffsetLeft = 30;                        //Offset Y Of Each Brick
var score = 0;                                   //Score
var lives = 1;                                   //Lives
var bricks = [];                                 //Bricks
//Bricks Configuring!!!
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

var ballColor = "orange";                         //Ball Color
var paddleColor = "cyan";                         //Paddle Color
var bricksColor = "blue";                         //Bricks Color
var scoreTextColor = "green";                     //Score Text Color
var livesTextColor = "red";                       //Lives Text Color