class canhao{

  constructor(x,y,width,height,angle){
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.angle=angle;
  this.canhaobase=loadImage('./assets/cannonBase.png');
  this.canhaocano=loadImage('./assets/canon.png');
  }
  
  show(){

  if (keyIsDown(RIGHT_ARROW)&&this.angle<75){

this.angle=this.angle+1;

  }
  if (keyIsDown(LEFT_ARROW)&&this.angle>-50){

    this.angle=this.angle-1;
    
      }
    push ();
  
  translate (this.x,this.y);
  rotate (this.angle);
  imageMode(CENTER);
  image (this.canhaocano,0,0,this.width,this.height);
  
    pop ();
  
  image (this.canhaobase,70,20,200,200);
  
  }
  
  }
