class Block {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            resitution: 1,
            density:0.002
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 225;
         
        World.add(world, this.body);
    }
    score() {
        if(this.visibility < 0 && this.visibility > -105) {
            score++;
        }
    }
    display() {
        if(this.body.speed<= 3) {
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            rotate(angle);
            rectMode(CENTER);
            fill("white");
            rect(pos.x, pos.y, this.width, this.height);
            pop(); 
        }
        else{
            push(); 
            //reduce the visibility to zero
            this.visibility = this.visibility - 5;

            //remove it from the world
            World.remove(world, this.body);

            pop();
        }
    }
}