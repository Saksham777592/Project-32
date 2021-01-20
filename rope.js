class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1.5
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;

        World.add(world, this.rope);
    }
    attach(body) {
        this.rope.bodyA = body;
    }
    fly() {
        this.rope.bodyA = null;
    }
    display() {
        if(this.rope.bodyA) {
            
            var point1 = this.pointB;
            var point2 = this.rope.bodyA.position;

            push();
            strokeWeight(4);
            stroke("white");
            line(point1.x, point1.y, point2.x, point2.y);
            pop();
        }
    }
}   