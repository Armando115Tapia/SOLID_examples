"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAreasOfMyShapes = void 0;
exports.calculateAreasOfMyShapes = function (shapes) {
    console.log('Aqui estoy');
    return shapes.reduce(function (acc, shap) {
        return acc + shap.getArea();
    }, 0);
};
