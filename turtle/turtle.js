"use strict";
exports.__esModule = true;
var Turtle = (function () {
    function Turtle() {
        this.angle = (Math.PI / 2); // radians
        this.visible = true;
        this.speed = 10;
        var canvas = document.getElementsByClassName('canvas')[0] || document.createElement('canvas');
        this.ctx = canvas.getContext("2d");
        this.x = Math.round(canvas.width / 2);
        this.y = Math.round(canvas.height / 2);
    }
    Turtle.prototype.penUp = function () {
        this.drawing = false;
    };
    Turtle.prototype.penDown = function () {
        this.drawing = true;
    };
    Turtle.prototype.move = function (distance) {
        var dx = Math.cos(this.angle) * distance;
        var dy = Math.sin(this.angle) * distance;
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
exports["default"] = Turtle;
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
