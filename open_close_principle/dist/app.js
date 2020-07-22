"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var calculateAreasOfMyShapes_1 = require("./calculateAreasOfMyShapes");
function app() {
    var myFirstCircle = new Circle_1.Circle(1);
    var mySecondCircle = new Circle_1.Circle(15);
    var myTrirdircle = new Circle_1.Circle(19);
    var myFourthCircle = new Circle_1.Circle(871);
    var myFirstRectangle = new Rectangle_1.Rectangle(14, 6);
    var mySecondRectangle = new Rectangle_1.Rectangle(8, 6);
    var myThyrdRectangle = new Rectangle_1.Rectangle(7, 3);
    var myShapes = [];
    myShapes.push(myFirstCircle, mySecondCircle, myTrirdircle, myFourthCircle, myFirstRectangle, mySecondRectangle, myThyrdRectangle);
    var myAreas = calculateAreasOfMyShapes_1.calculateAreasOfMyShapes(myShapes);
    console.log('myAreas: ', myAreas);
}
app();
