// Jest tests for shapes
const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  it("Should display a triangle with selected background color", () => {
    const color = "red";
    const triangle = new Triangle("text", color, "square");
    const logoResult = `<svg width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="250,60 100,400 400,400" class="triangle" fill="${color}"/>
    <text font-size="30px" x="250" y="220" fill="red">text</text>
    
    </svg>`;
    expect(triangle.render()).toEqual(logoResult);
  });
});

describe("Circle", () => {
  it("Should display a circle with selected background color", () => {
    const color = "red";
    const circle = new Circle("text", color, "square");
    const logoResult = `<svg width="500" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="250" cy="200" r="150" stroke="red" fill="${color}" stroke-width="5"/>
    <text font-size="30px" x="250" y="200" text-anchor="middle" fill="circle">text</text>
    
    </svg>`;
    expect(circle.render()).toEqual(logoResult);
  });
});

describe("Square", () => {
  it("Should display a square with selected background color", () => {
    const color = "red";
    const square = new Square("text", color, "square");
    const logoResult = `<svg width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
    <rect width="300" height="300" x="50" y="50" fill="${color}" />
    <text font-size="30px" x="200" y="190" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>`;
    expect(square.render()).toEqual(logoResult);
  });
});
