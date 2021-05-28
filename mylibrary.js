function isTouching (object1,object2){

    if (object1.x-object2.x<=object1.width/2+object2.width/2 &&
      object2.x-object1.x<=object1.width/2+object2.width/2 &&
      object2.y-object1.y<=object1.height/2+object2.height/2 &&
      object1.y-object2.y<= object1.height/2+object2.height/2
      ){
    
      return true;
    
    } else {
      return false;
    
    }
    
    
    
    }
    
    function bounceOff (o1,o2){
    
      if (o1.x-o2.x<=o1.width/2+o2.width/2 &&
        o2.x-o1.x<=o1.width/2+o2.width/2){
    
        o1.velocityX= o1.velocityX*-1
        o2.velocityX= o2.velocityX*-1
    
      }
    
      if (o1.y-o2.y<=o1.height/2+o2.height/2 &&
        o2.y-o1.y<=o1.height/2+o2.height/2){
    
        o1.velocityY= o1.velocityY*-1
        o2.velocityY= o2.velocityY*-1
    
      }
    
    
    }
    
    function stopfall (t1,t2){
    
    if (t1.x-t2.x<=t1.width/2+t2.width/2 &&
      t2.x-t1.x<=t1.width/2+t2.width/2){
    
    t1.velocityX=0;
    t2.velocityX=0;
    
      }
      
      if (t1.y-t2.y<=t1.height/2+t2.height/2 &&
        t2.y-t1.y<=t1.height/2+t2.height/2){
      
      t1.velocityY=0;
      t2.velocityY=0;
      
        }
    
    }