class Shooter {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            'friction': 1.3,
            'density': 5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("polygon.png");
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
      
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}