type Rectangle = {
  height: number;
  weight: number;
};

type Circle = {
  radious: number;
};

type Square = {
  length: number;
};

type Shape = Rectangle | Circle | Square;

const calculateArea = (shape: Shape) => {
  if ("radious" in shape) {
    return Math.PI * shape.radious * shape.radious;
  } else if ("length" in shape) {
    return shape.length * shape.length;
  } else {
    return shape.height * shape.weight;
  }
};
