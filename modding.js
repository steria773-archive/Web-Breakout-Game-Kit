//Functions For Modify Colors In Game,Fun For Use!!!
//See utils.js And variables.js
function setBallColor(color)
{
	ballColor = color;
}
function setPaddleColor(color)
{
	paddleColor = color;
}
function setBricksColor(color)
{
	bricksColor = color;
}
function setScoreTextColor(color)
{
	scoreTextColor = color;
}
function setLivesTextColor(color)
{
	livesTextColor = color;
}
function setBrickRows(rows)
{
	brickRowCount = rows;
}
function setBrickColumns(columns)
{
	bricksColumnCount = columns;
}
function setBrickRank(rows,columns)
{
	brickRowCount = rows;
	bricksColumnCount = columns;
}
function setScore(game_score)
{
	score = game_score;
}
function setLives(game_lives)
{
	lives = game_lives;
}
function setBallSpeedX(x)
{
	dx = x;
}
function setBallSpeedY(y)
{
	dy = y;
}
function setBallSpeed(x,y)
{
	dx = x;
	dy = y;
}
function setPaddleHeight(h)
{
	paddleHeight = h;
}
function setPaddleWidth(w)
{
	paddleWidth = w;
}
function setPaddleSize(h,w)
{
	paddleHeight = h;
	paddleWidth = w;
}
function setBricksPadding(p)
{
	brickPadding = p;
}
function setBricksHeight(h)
{
	brickHeight = h;
}
function setBricksWidth(w)
{
	brickWidth = w;
}
function setBricksSize(h,w)
{
	brickHeight = h;
	brickWidth = w;
}
function setBallRadius(r)
{
	ballRadius = r;
}
function setBackgroundImage(url)
{
	document.body.style.backgroundImage = "url(" + url.toString() + ")"; 
}
function setBackgroundColor(color)
{
	document.body.style.color = color;
    document.body.style.backgroundColor = color;
}