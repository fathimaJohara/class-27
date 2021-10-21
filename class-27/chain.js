class Chain{
    constructor(bodyA,bodyB){
        var ops={
            bodyA:bird.body,
            bodyB:constrainedlog.body,
            stifness:0.04,
            length:10
        }
        this.chain=Constraint.create(ops)
        World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }

}