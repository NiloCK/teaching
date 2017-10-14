declare class Pen {
    color: string;
    width: number;
}
declare class Queue<T> {
    private queue;
    enqueue(element: T): void;
    dequeue(): T | null;
}
declare class CanvasStroke {
    initX: number;
    initY: number;
    finalX: number;
    finalY: number;
    pen: Pen;
}
declare class Animator {
    private static instance;
    private animationQueues;
    private ctx;
    private constructor(ctx);
    private animate;
    addTurtleAnimationQueue(queue: Queue<CanvasStroke>): void;
    private getFrameStrokes();
    static isIntialized(): boolean;
    static Instance(ctx?: CanvasRenderingContext2D): Animator;
}
declare class Turtle {
    private static drawTurtles;
    static hide: () => void;
    static show: () => void;
    private strokeQueue;
    /**
     * The x coordinate of the Turtle
     */
    private x;
    /**
     * The y coordinate of the Turtle
     */
    private y;
    /**
     * Angle, in radians, that the turtle is facing
     */
    private angle;
    private drawing;
    private pen;
    /**
     * The speed of the turtle. Set to 0 for the turtle to draw instantly.
     */
    speed: number;
    private ctx;
    constructor(x?: number, y?: number, canvas?: HTMLCanvasElement);
    /**
     * Creates a new turtle at the specified coordinates, or with the same
     * location / orientation of the parent if no coordinates are given.
     * @param x
     * @param y
     * @param angle
     */
    newTurtle(x?: number, y?: number, speed?: number, angle?: number): Turtle;
    /**
     * Creates a 'family' of new turtles at the same location and angle
     * of the parent turtle.
     * @param n The number of turtles to produce
     */
    newTurtles(n: number): Array<Turtle>;
    /**
     * Lifts the turtle's drawing pen.
     */
    penUp(): void;
    /**
     * Lowers the turtle's drawing pen.
     */
    penDown(): void;
    penColor(color: string): void;
    penWidth(width: number): void;
    /**
     * @param distance The distance, in pixels, to move.
     */
    move(distance: number): void;
    private getStrokes(initX, initY, finalX, finalY, frameCount);
    /**
     * Turn the turtle to the left.
     * @param fraction The fraction of a whole turn that the turtle will turn
     */
    turnLeft(fraction: number): void;
    turnRight(fraction: number): void;
    private turnLeftDeg(degrees);
    private turnRightDeg(degrees);
    /**
     * Returns the length of time in seconds for a 'move' command
     * @param distance The distance in pixels of the movement
     */
    private moveTime(distance);
    /**
     * Returns the number of steps that a turtle's move operation will take,
     * depending on the distance and the turtle's current speed.
     * @param distance The distance in pixels of the movement
     */
    private moveAnimationFrameCount(distance);
    private normalizeAngle();
}
declare function degreesToRadians(degrees: number): number;
