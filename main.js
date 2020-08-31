//Main Game Logic!!!
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  }
  
  
  else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      lives--;
      if(!lives) {
        alert("GAME OVER");
        document.location.reload();
      }
      else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 10;
        dy = -10;
        paddleX = (canvas.width-paddleWidth)/2;
      }
    }
  }
  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 20; //Paddle X Speed To Move Right!!!
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 20; //Paddle X Speed To Move Left!!!
  }
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}
draw();