class Ball extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("sprites/ball.png");
      this.image.scale = 10;
      this.Visiblity = 255;
    }
}