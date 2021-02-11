class Slingshot{

    constructor(bodyA, pointB){

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
            
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){

        if(this.rope.bodyA){

            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }

    }
 
    fly(){

        this.rope.bodyA = null;

    }

    attach(bodyA){

        this.rope.bodyA = bodyA;


    }

}