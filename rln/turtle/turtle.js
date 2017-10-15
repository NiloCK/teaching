// class Animation {}
var Pen = /** @class */ (function () {
    function Pen() {
    }
    return Pen;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = new Array();
    }
    Queue.prototype.enqueue = function (element) {
        this.queue.push(element);
    };
    Queue.prototype.dequeue = function () {
        var ret = this.queue.shift();
        if (ret) {
            return ret;
        }
        else {
            return null;
        }
    };
    return Queue;
}());
var CanvasStroke = /** @class */ (function () {
    function CanvasStroke() {
    }
    return CanvasStroke;
}());
var Animator = /** @class */ (function () {
    function Animator(ctx) {
        var _this = this;
        this.animate = function () {
            // console.log(`Animating ${this.animationQueues.length} turtles...`);
            var strokes = _this.getFrameStrokes();
            strokes.forEach(function (stroke) {
                _this.ctx.strokeStyle = stroke.pen.color;
                _this.ctx.lineWidth = stroke.pen.width;
                _this.ctx.lineCap = "square";
                _this.ctx.beginPath();
                _this.ctx.moveTo(stroke.initX, stroke.initY);
                _this.ctx.lineTo(stroke.finalX, stroke.finalY);
                _this.ctx.stroke();
            });
            requestAnimationFrame(_this.animate);
        };
        this.ctx = ctx;
        this.animationQueues = new Array();
        this.animate(); // always be animating!
    }
    Animator.prototype.addTurtleAnimationQueue = function (queue) {
        this.animationQueues.push(queue);
    };
    Animator.prototype.getFrameStrokes = function () {
        var ret = new Array();
        // console.log(`Attempting to get frames from Turtles...`);
        for (var i = 0; i < this.animationQueues.length; i++) {
            var stroke = this.animationQueues[i].dequeue();
            if (stroke) {
                ret.push(stroke);
            }
        }
        return ret;
    };
    Animator.isIntialized = function () {
        return this.instance ? true : false;
    };
    Animator.Instance = function (ctx) {
        if (this.instance) {
            return this.instance;
        }
        else if (ctx) {
            this.instance = new this(ctx);
            return this.instance;
        }
        else {
            throw new Error("Animator must be initialized with a CanvasRenderingContext2D");
        }
    };
    return Animator;
}());
var Turtle = /** @class */ (function () {
    function Turtle(x, y, canvas) {
        /**
         * Angle, in radians, that the turtle is facing
         */
        this.angle = (Math.PI / 2); // radians
        this.drawing = true;
        this.pen = {
            color: "black",
            width: 2
        };
        /**
         * The speed of the turtle. Set to 0 for the turtle to draw instantly.
         */
        this.speed = 10; // *10 px/second? 0 == inf
        this.strokeQueue = new Queue();
        if (canvas) {
            this.ctx = canvas.getContext("2d");
        }
        else {
            canvas = document.getElementById('turtleCanvas');
            this.ctx = canvas.getContext("2d");
        }
        // if (Turtle.AnimationManager.ctx == null) {
        //     Turtle.AnimationManager.setContext(this.ctx);
        // }
        this.x = (x != undefined) ? x : Math.round(canvas.width / 2);
        this.y = (y != undefined) ? y : Math.round(canvas.height / 2);
        // register the turtle with the Animator
        Animator.Instance(this.ctx).addTurtleAnimationQueue(this.strokeQueue);
    }
    /**
     * Creates a new turtle at the specified coordinates, or with the same
     * location / orientation of the parent if no coordinates are given.
     * @param x
     * @param y
     * @param angle
     */
    Turtle.prototype.newTurtle = function (x, y, speed, angle) {
        var babyTurtle = new Turtle(x ? x : this.x, y ? y : this.y, this.ctx.canvas);
        babyTurtle.speed = speed ? speed : this.speed;
        babyTurtle.angle = angle ? angle : this.angle;
        return babyTurtle;
    };
    /**
     * Creates a 'family' of new turtles at the same location and angle
     * of the parent turtle.
     * @param n The number of turtles to produce
     */
    Turtle.prototype.newTurtles = function (n) {
        var ret = [];
        for (var i = 0; i < n; i++) {
            ret.push(this.newTurtle());
        }
        return ret;
    };
    /**
     * Lifts the turtle's drawing pen.
     */
    Turtle.prototype.penUp = function () {
        this.drawing = false;
    };
    /**
     * Lowers the turtle's drawing pen.
     */
    Turtle.prototype.penDown = function () {
        this.drawing = true;
    };
    Turtle.prototype.penColor = function (color) {
        this.pen.color = color;
    };
    Turtle.prototype.penWidth = function (width) {
        this.pen.width = width;
    };
    /**
     * @param distance The distance, in pixels, to move.
     */
    Turtle.prototype.move = function (distance) {
        var _this = this;
        // console.log("moving a turtle...");
        var dx = Math.cos(this.angle) * distance;
        var dy = Math.sin(this.angle) * distance;
        if (this.drawing) {
            // this.draw(dx, dy, this.moveTime(distance));
            var strokes = this.getStrokes(this.x, this.y, this.x + dx, this.y + dy, this.moveAnimationFrameCount(distance));
            strokes.forEach(function (stroke) {
                // Turtle.AnimationManager.frames.enqueue([stroke]);
                // console.log(`Enqueuing a stroke.`);
                _this.strokeQueue.enqueue(stroke);
            });
            // Turtle.AnimationManager.animate();
        }
        this.x += dx;
        this.y += dy;
    };
    Turtle.prototype.getStrokes = function (initX, initY, finalX, finalY, frameCount) {
        var dx = (finalX - initX) / frameCount;
        var dy = (finalY - initY) / frameCount;
        var runningX = initX;
        var runningY = initY;
        var ret = new Array();
        var count = 1;
        while (count < frameCount) {
            ret.push({
                initX: runningX,
                initY: runningY,
                finalX: runningX + dx,
                finalY: runningY + dy,
                pen: this.pen
            });
            count++;
            runningX += dx;
            runningY += dy;
        }
        ret.push({
            initX: runningX - dx,
            initY: runningY - dy,
            finalX: finalX,
            finalY: finalY,
            pen: {
                color: 'black',
                width: 2
            }
        });
        return ret;
    };
    /**
     * Turn the turtle to the left.
     * @param fraction The fraction of a whole turn that the turtle will turn
     */
    Turtle.prototype.turnLeft = function (fraction) {
        this.turnLeftDeg(fraction * 360);
    };
    Turtle.prototype.turnRight = function (fraction) {
        this.turnRightDeg(fraction * 360);
    };
    Turtle.prototype.turnLeftDeg = function (degrees) {
        this.angle -= degreesToRadians(degrees);
        this.normalizeAngle();
    };
    Turtle.prototype.turnRightDeg = function (degrees) {
        this.angle += degreesToRadians(degrees);
        this.normalizeAngle();
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
            var ret = distance / (10 * this.speed);
            // console.log(`This line will take: ${ret} seconds`);
            return ret;
        }
    };
    /**
     * Returns the number of steps that a turtle's move operation will take,
     * depending on the distance and the turtle's current speed.
     * @param distance The distance in pixels of the movement
     */
    Turtle.prototype.moveAnimationFrameCount = function (distance) {
        var time = this.moveTime(distance);
        if (time === 0) {
            return 1; // do the animation in one step
        }
        else {
            return Math.floor(this.moveTime(distance) / 0.016); // requestAnimationFrame
        }
    };
    Turtle.prototype.normalizeAngle = function () {
        //this.moveAnimationFrameCount(0); // should I animate the turning Turtle?
        while (this.angle >= 2 * Math.PI) {
            this.angle -= 2 * Math.PI;
        }
        while (this.angle < 0) {
            this.angle += 2 * Math.PI;
        }
    };
    // private static AnimationManager: AnimationManager = new AnimationManager();
    Turtle.drawTurtles = true;
    Turtle.hide = function () {
        Turtle.drawTurtles = false;
    };
    Turtle.show = function () {
        Turtle.drawTurtles = true;
    };
    return Turtle;
}());
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
// export default Turtle; 
//# sourceMappingURL=turtle.js.map