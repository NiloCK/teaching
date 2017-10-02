var Turtle = (function () {
    function Turtle(canvas) {
        /**
         * Angle, in radians, that the turtle is facing
         */
        this.angle = (Math.PI / 2); // radians
        this.drawing = true;
        this.visible = true;
        this.speed = 10; // *10 px/second? 0 == inf
        this.ctx = canvas.getContext("2d");
        this.x = Math.round(canvas.width / 2);
        this.y = Math.round(canvas.height / 2);
    }
    /**
     * Creates a new Turtle at the specified coordinates, or with the same
     * location / orientation of the parent if no coordinates are given.
     * @param x
     * @param y
     * @param angle
     */
    Turtle.prototype.newTurtle = function (x, y, angle) {
        var babyTurtle = new Turtle(this.ctx.canvas);
        babyTurtle.x = x | this.x;
        babyTurtle.y = y | this.y;
        babyTurtle.angle = angle | this.angle;
        return babyTurtle;
    };
    Turtle.prototype.penUp = function () {
        this.drawing = false;
    };
    Turtle.prototype.penDown = function () {
        this.drawing = true;
    };
    Turtle.prototype.move = function (distance) {
        console.log("moving a turtle...");
        var dx = Math.cos(this.angle) * distance;
        var dy = Math.sin(this.angle) * distance;
        if (this.drawing) {
            this.draw(dx, dy, this.moveTime(distance));
        }
        else {
            this.x += dx;
            this.y += dy;
        }
    };
    Turtle.prototype.draw = function (dx, dy, time) {
        console.log("drawing a line..."); // works, is called. How to animate properly?
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        console.log("\n        dx: " + dx + "\n        dy: " + dy);
        //todo speed is being used backwards somehow.
        //todo speed = 0 is resulting in no drawing
        var stepX = (dx > 1) ? (time / 30) * dx : dx;
        var stepY = (dy > 1) ? (time / 30) * dy : dy;
        this.ctx.lineTo(this.x + stepX, this.y + stepY);
        this.ctx.stroke();
        this.x += stepX;
        this.y += stepY;
        if (dx > 0 || dy > 0) {
            window.requestAnimationFrame(this.draw.bind(this, dx - stepX, dy - stepY, time));
        }
    };
    Turtle.prototype.turnLeft = function (fraction) {
        this.turnLeftDeg(fraction * 360);
    };
    Turtle.prototype.turnRight = function (fraction) {
        this.turnRightDeg(fraction * 360);
    };
    Turtle.prototype.turnLeftDeg = function (degrees) {
        this.angle += degreesToRadians(degrees);
        this.normalizeAngle();
    };
    Turtle.prototype.turnRightDeg = function (degrees) {
        this.angle -= degreesToRadians(degrees);
        this.normalizeAngle();
    };
    Turtle.prototype.hide = function () {
        this.visible = false;
    };
    /**
     * Returns the length of time in seconds for a 'move' command
     * @param distance The distance in pixels of the movement
     */
    Turtle.prototype.moveTime = function (distance) {
        if (this.speed === 0) {
            return 0;
        }
        else {
            return distance / (10 * this.speed);
        }
    };
    /**
     *
     * @param distance The distance in pixels of the movement
     */
    Turtle.prototype.moveSteps = function (distance) {
        return this.moveTime(distance) / 0.016; // requestAnimationFrame
    };
    Turtle.prototype.normalizeAngle = function () {
        while (this.angle >= 2 * Math.PI) {
            this.angle -= 2 * Math.PI;
        }
        while (this.angle < 0) {
            this.angle += 2 * Math.PI;
        }
    };
    return Turtle;
}());
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
