var x = 50;
var y = 50;
var diameter = 25;
var mousex = 0;
var mousey = 0;
var myXs = []; // create an array for the x coordinate
var myYs = []; // create an array for the y coordinate
var myDiameters = []; // create array for the diameter of circles
var Circles = [];

function setup() 
{
  createCanvas(800, 600);
  movement = Math.floor(Math.random() * 10);
  // create a for loop here to create the circles
    for(var i = 0; i < 5; i++)
    {
        // get all the random numbers to create a circle
        myXs[i] = getRandomX(800);
        myYs[i] = getRandomY(600);
        myDiameters[i] = getRandomDiameter(100);
        
    }
   
  
  
}


function draw() 
{
  background(50,80,130);
  fill(24, 200, 29);
  circle(x, y, diameter);
  // call the function created
  controlCircle();
  youwin();
  ellipse(mousex, mousey, 15, 50);

  for(var i = 0; i < myXs.length; i++)
  {
        circle(myXs[i], myYs[i], myDiameters[i]);
        
  }

  if(myXs <= 800)
  {
    myXs+=movement;
  }
 
 
}


/* This function controls all the variables of the circle */
function controlCircle()
{
    if (x >= 800) 
    {
        x = 0;
    }

    if (keyIsDown(83)) 
    {
        y += 10;
    } 
    else if (keyIsDown(87)) 
    {
        y -= 10;
    }

    if (y >= 600) 
    {
        y = 0;
    }
    
    // we call the function here.
    //changeDiameter();

}

// This function updates the size of the circle
//function changeDiameter()
{
  //  if (diameter < 200) 
    //{
      //  diameter += 2;
    //} 
    //else if (diameter >= 200) 
    //{
        //diameter = 25;
    //}

}
function keyPressed() 
{
  if (key == 'd') 
  {
    x += 50;
  } 
  else if (key == 'a') 
  {
    x -= 50;
  }
}

function mousePressed() 
{  
  mousex = mouseX;
  mousey = mouseY;

}

function getRandomX(x)
{
    return Math.floor(Math.random()*x)+10;
}

function getRandomY(y)
{
    return Math.floor(Math.random()*y) + 10;
}

function getRandomDiameter(diameter)
{
    return Math.floor(Math.random()*diameter)+10
}
function youwin()
    {
        textSize(40);
        text('EXIT', 700, 580);
        
        if (x >= 700 && y >= 580)
        {
            text("YOU WIN!", 400,300)
        }

   
}