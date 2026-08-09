"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateArea = (shape) => {
    if ("radious" in shape) {
        return Math.PI * shape.radious * shape.radious;
    }
    else if ("length" in shape) {
        return shape.length * shape.length;
    }
    else {
        return shape.height * shape.weight;
    }
};
//# sourceMappingURL=union_type.js.map