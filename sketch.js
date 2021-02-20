const Engine=Matter.Engine;
 const World=Matter.World; 
 const Bodies=Matter.Bodies; 
 var engine,world,object,ball; 

 function setup() { 
   createCanvas(400,400);

   engine=Engine.create();
    world=engine.world; 

  var object_options={ isStatic:true }
  object=Bodies.rectangle(200,390,400,25,object_options); 

    World.add(world,object); 

    var ball_options={ restitution:1 }
    ball=Bodies.circle(200,200,20,ball_options); 
  
      World.add(world,ball); 
   } 
     
   function draw()
    { Engine.update(engine);
     background(0); 
      rectMode(CENTER);

       rect(object.position.x,object.position.y,400,25) 
      ellipseMode(RADIUS);
      ellipse(ball.position.x,ball.position.y,20)
      
      }
