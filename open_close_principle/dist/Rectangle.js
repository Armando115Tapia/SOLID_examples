"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.width;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
