// class Animation {}
var Pen = /** @class */ (function () {
    function Pen() {
    }
    return Pen;
}());
var QueueTree = /** @class */ (function () {
    function QueueTree() {
        this.queue = new Array();
        this.children = new Array();
    }
    QueueTree.prototype.enqueue = function (element) {
        this.queue.push(element);
    };
    QueueTree.prototype.dequeue = function () {
        var ret = this.queue.shift();
        if (ret) {
            return ret;
        }
        else {
            return null;
        }
    };
    QueueTree.prototype.yieldChildren = function () {
        return this.children;
    };
    QueueTree.prototype.addChild = function (child) {
        this.children.push(child);
    };
    return QueueTree;
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
            _this.turtleOverlayCtx.clearRect(0, 0, 10000, 10000);
            strokes.forEach(function (stroke) {
                _this.lineDrawingCtx.strokeStyle = stroke.pen.color;
                _this.lineDrawingCtx.lineWidth = stroke.pen.width;
                _this.lineDrawingCtx.lineCap = "square";
                _this.lineDrawingCtx.beginPath();
                _this.lineDrawingCtx.moveTo(stroke.initX, stroke.initY);
                _this.lineDrawingCtx.lineTo(stroke.finalX, stroke.finalY);
                _this.lineDrawingCtx.stroke();
                // this.turtleOverlayCtx.fillRect(stroke.finalX, stroke.finalY, 5, 5);
                // this.turtleOverlayCtx.drawImage(
                //     this.turtleImg,
                //     stroke.finalX,
                //     stroke.finalY,
                //     20, 20);
                _this.drawTurtle(stroke.finalX, stroke.finalY, stroke.angle);
            });
            requestAnimationFrame(_this.animate);
        };
        this.lineDrawingCtx = ctx;
        var overlayCtx = document.getElementById('turtleOverlayCanvas');
        this.turtleOverlayCtx = overlayCtx.getContext('2d');
        // this.turtleImg = new HTMLImageElement();
        this.animationQueues = new Array();
        // this.turtleImg = document.createElement('img');
        // this.turtleImg.onload = () => {
        //     this.animate(); // always be animating!
        // }
        // this.turtleImg.src = './turtle/turtle.PNG';
        this.animate(); // always be animating!
    }
    Animator.prototype.drawTurtle = function (x, y, angle) {
        angle = angle + Math.PI;
        this.turtleOverlayCtx.fillStyle = 'green';
        this.turtleOverlayCtx.beginPath();
        this.turtleOverlayCtx.moveTo(x, y);
        this.turtleOverlayCtx.arc(x, y, 25, angle + (Math.PI / 8), angle - (Math.PI / 8), true);
        this.turtleOverlayCtx.fill();
    };
    Animator.prototype.addTurtleAnimationQueue = function (queue) {
        this.animationQueues.push(queue);
    };
    Animator.prototype.getFrameStrokes = function () {
        var _this = this;
        var ret = new Array();
        // console.log(`Attempting to get frames from Turtles...`);
        // let newQueues: Array<QueueTree<CanvasStroke>> = new Array<QueueTree<CanvasStroke>>();
        var deadTurtles = new Array();
        for (var i = 0; i < this.animationQueues.length; i++) {
            var stroke = this.animationQueues[i].dequeue();
            if (stroke) {
                ret.push(stroke);
            }
            else {
                // this.queueSuccession(this.animationQueues[i]);
                deadTurtles.push(this.animationQueues[i]);
            }
        }
        // this.queueSuccession(t);
        deadTurtles.forEach(function (deadTurtle) {
            _this.queueSuccession(deadTurtle);
        });
        // this.animationQueues.concat(newQueues);
        return ret;
    };
    Animator.prototype.queueSuccession = function (q) {
        var _this = this;
        var index = this.animationQueues.indexOf(q);
        // console.log(`${this.animationQueues.length} Turtles now...`);
        this.animationQueues.splice(index, 1);
        // delete this.animationQueues[index];
        // console.log(`Removing a turtle... ${this.animationQueues.length} turtles now...`);
        q.yieldChildren().forEach(function (queueTree) {
            _this.animationQueues.push(queueTree);
            // console.log(`adding a turtle... ${this.animationQueues.length}`);
        });
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
    function Turtle(x, y, angle, canvas) {
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
        if (x) {
            if (typeof (x) != "number") {
                this.strokeQueue = new QueueTree();
                x.strokeQueue.addChild(this.strokeQueue);
                this.ctx = x.ctx;
                this.x = x.x;
                this.y = x.y;
                this.angle = x.angle;
                this.speed = x.speed;
                this.pen = x.pen;
                // the strokeQueue is already registered w/ the animator
            }
        }
        else {
            this.strokeQueue = new QueueTree();
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
    }
    /**
     * Creates a new turtle at the specified coordinates, or with the same
     * location / orientation of the parent if no coordinates are given.
     * @param x
     * @param y
     * @param angle
     */
    // protected newTurtle(x?: number, y?: number, speed?: number, angle?: number): Turtle {
    //     let babyTurtle = new Turtle(
    //         x ? x : this.x,
    //         y ? y : this.y,
    //         angle ? angle : this.angle,
    //         this.ctx.canvas);
    //     babyTurtle.speed = speed ? speed : this.speed;
    //     babyTurtle.angle = angle ? angle : this.angle;
    //     return babyTurtle;
    // }
    /**
     * Creates a 'family' of new turtles at the same location and angle
     * of the parent turtle.
     * @param n The number of turtles to produce
     */
    // newTurtles(n: number): Array<this> {
    //     let ret: Array<this> = [];
    //     for (let i = 0; i < n; i++) {
    //         ret.push(this.newTurtle());
    //     }
    //     return ret;
    // }
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
                angle: this.angle,
                pen: {
                    width: this.pen.width,
                    color: this.pen.color
                }
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
            angle: this.angle,
            pen: {
                width: this.pen.width,
                color: this.pen.color
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