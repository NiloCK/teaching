export default class Turtle {
    x: number;
    y: number;
    angle: number = (Math.PI / 2); // radians

    private drawing: boolean;
    visible: boolean = true;
    speed: number = 10;

    ctx: CanvasRenderingContext2D;


    constructor() {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName('canvas')[0] || document.createElement('canvas');
        this.ctx = canvas.getContext("2d");

        this.x = Math.round(canvas.width / 2);
        this.y = Math.round(canvas.height / 2);
    }

    penUp() {
        this.drawing = false;
    }
    penDown() {
        this.drawing = true;
    }

    move(distance: number): void {
        let dx = Math.cos(this.angle) * distance;
        let dy = Math.sin(this.angle) * distance;

    }

    turnLeft(fraction: number): void {
        this.turnLeftDeg(fraction * 360);
    }
    turnRight(fraction: number): void {
        this.turnRightDeg(fraction * 360);
    }
    turnLeftDeg(degrees: number): void {
        this.angle += degreesToRadians(degrees);
        this.normalizeAngle();
    }
    turnRightDeg(degrees: number): void {
        this.angle -= degreesToRadians(degrees);
        this.normalizeAngle();
    }

    hide(): void {
        this.visible = false;
    }

    private normalizeAngle(): void {
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