"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radious) {
        this.radious = radious;
    }
    Circle.prototype.getArea = function () {
        return this.radious * Math.pow(Math.PI, 2);
    };
    return Circle;
}());
exports.Circle = Circle;
