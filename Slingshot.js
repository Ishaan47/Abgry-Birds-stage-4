class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.slingImage1 = loadImage("sprites/sling1.png");
        this.slingImage2 = loadImage("sprites/sling2.png");
        this.slingImage3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingImage1, 200,20);
        image(this.slingImage2, 170,15);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            stroke(48, 22, 8);
           line(pointA.x-20, pointA.y+5, pointB.x-20, pointB.y);
           line(pointA.x-20, pointA.y+5, pointB.x+20, pointB.y);
           image(this.slingImage3, pointA.x-20,pointA.y+5);
           
           if(pointA.x>220 & pointA.y>20)
           {
            line(pointA.x+20, pointA.y+5, pointB.x+20, pointB.y);
            line(pointA.x+20, pointA.y+5, pointB.x-20, pointB.y);
            image(this.slingImage3, pointA.x+20,pointA.y+5);
           }
          
           

        }
    }
    
}