// Jest tests for shapes
// Import the Shape Classes
const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  it("Should display a triangle with selected background color", () => {
    const shapeColor = "red";
    const text = "text";
    const textColor = "black";
    const triangle = new Triangle(text, shapeColor, textColor);
    const logoResult = `<svg width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="250,60 100,400 400,400" class="triangle" fill="${shapeColor}"/><text font-size="30px" x="220" y="220" fill="${textColor}">${text}</text></svg>`;
    expect(triangle.render()).toBe(logoResult);
  });
});

describe("Circle", () => {
  it("Should display a circle with selected background color", () => {
    const shapeColor = "red";
    const text = "text";
    const textColor = "black";
    const shape = new Circle(text, shapeColor, textColor);
    const logoResult = `<svg width="500" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="250" cy="200" r="150" stroke="red" fill="${shapeColor}" stroke-width="5"/><text font-size="30px" x="250" y="200" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    expect(shape.render()).toBe(logoResult);
  });
});

describe("Square", () => {
  it("Should display a Square with selected background color", () => {
    const shapeColor = "red";
    const text = "text";
    const textColor = "black";
    const shape = new Square(text, shapeColor, textColor);
    const logoResult = `<svg width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" x="50" y="50" fill="${shapeColor}" /><text font-size="30px" x="200" y="190" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    expect(shape.render()).toBe(logoResult);
  });
});
