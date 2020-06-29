class Wall{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':0.5,
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/wimg.png");
        World.add(world, this.body);
    }
}