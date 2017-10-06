// class Animation {}


class Turtle {
    x: number;
    y: number;
    /**
     * Angle, in radians, that the turtle is facing
     */
    private angle: number = (Math.PI / 2); // radians

    private drawing: boolean = true;
    visible: boolean = true;
    speed: number = 10; // *10 px/second? 0 == inf

    ctx: CanvasRenderingContext2D;

    constructor(x?: number, y?: number, canvas?: HTMLCanvasElement, ) {
        if (canvas) {
            this.ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
        } else {
            canvas = <HTMLCanvasElement>document.getElementById('turtleCanvas');
            this.ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
        }

        this.x = (x != undefined) ? x : Math.round(canvas.width / 2);
        this.y = (y != undefined) ? y : Math.round(canvas.height / 2);
    }


    /**
     * Creates a new Turtle at the specified coordinates, or with the same
     * location / orientation of the parent if no coordinates are given.
     * @param x 
     * @param y 
     * @param angle 
     */
    newTurtle(x?: number, y?: number, angle?: number): Turtle {
        let babyTurtle = new Turtle(
            x ? x : this.x,
            y ? y : this.y,
            this.ctx.canvas);

        babyTurtle.angle = angle ? angle : this.angle;

        return babyTurtle;
    }

    penUp() {
        this.drawing = false;
    }
    penDown() {
        this.drawing = true;
    }

    move(distance: number): void {
        console.log("moving a turtle...");
        let dx = Math.cos(this.angle) * distance;
        let dy = Math.sin(this.angle) * distance;

        if (this.drawing) {
            this.draw(dx, dy, this.moveTime(distance));
        } else {
            this.x += dx;
            this.y += dy;
        }
    }

    private draw(dx: number, dy: number, time: number): void {
        console.log("drawing a line..."); // works, is called. How to animate properly?
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);

        console.log(`
            dx: ${dx}
            dy: ${dy}`);

        //todo speed is being used backwards somehow.
        //todo speed = 0 is resulting in no drawing
        let stepX: number = (dx > 1) ? (time / 30) * dx : dx;
        let stepY: number = (dy > 1) ? (time / 30) * dy : dy;

        this.ctx.lineTo(this.x + stepX, this.y + stepY);
        this.ctx.stroke();

        this.x += stepX;
        this.y += stepY;
        if (dx > 0 || dy > 0) {
            window.requestAnimationFrame(this.draw.bind(this, dx - stepX, dy - stepY, time));
        }
    }
    /**
     * Turn the turtle to the left.
     * @param fraction The fraction of a whole turn that the turtle will turn
     */
    turnLeft(fraction: number): void {
        this.turnLeftDeg(fraction * 360);
    }
    turnRight(fraction: number): void {
        this.turnRightDeg(fraction * 360);
    }
    private turnLeftDeg(degrees: number): void {
        this.angle -= degreesToRadians(degrees);
        this.normalizeAngle();
    }
    private turnRightDeg(degrees: number): void {
        this.angle += degreesToRadians(degrees);
        this.normalizeAngle();
    }

    hide(): void {
        this.visible = false;
    }


    /**
     * Returns the length of time in seconds for a 'move' command
     * @param distance The distance in pixels of the movement
     */
    private moveTime(distance: number): number {
        if (this.speed === 0) {
            return 0;
        } else {
            return distance / (10 * this.speed);
        }
    }

    /**
     * 
     * @param distance The distance in pixels of the movement
     */
    private moveSteps(distance: number): number {
        return this.moveTime(distance) / 0.016; // requestAnimationFrame
    }

    private normalizeAngle(): void {
        this.moveSteps(0);

        while (this.angle >= 2 * Math.PI) {
            this.angle -= 2 * Math.PI;
        }
        while (this.angle < 0) {
            this.angle += 2 * Math.PI;
        }
    }
}

function degreesToRadians(degrees: number): number {
    return degrees * Math.PI / 180;
}

// export default Turtle;