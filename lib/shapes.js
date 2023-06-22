// Exports `Triangle`, `Circle`, and `Square` classes
class Circle {
  constructor(text, colorShape, colorText) {
    this.text = text;
    this.colorShape = colorShape;
    this.colorText = colorText;
  }
  render() {
    return `<svg width="500" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="250" cy="200" r="150" stroke="red" fill="${this.colorShape}" stroke-width="5"/>
        <text font-size="30px" x="250" y="200" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
        
        </svg>`;
  }
}
class Triangle {
  constructor(text, colorShape, colorText) {
    this.text = text;
    this.colorShape = colorShape;
    this.colorText = colorText;
  }
  render() {
    return `<svg width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
        <polygon points="250,60 100,400 400,400" class="triangle" fill="${this.colorShape}"/>
        <text font-size="30px" x="250" y="150" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
        
        </svg>`;
  }
}
class Square {
  constructor(text, colorShape, colorText) {
    this.text = text;
    this.colorShape = colorShape;
    this.colorText = colorText;
  }
  render() {
    return `<svg width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
        <rect width="300" height="300" fill="${this.colorShape}" />
        <text x="250" y="150" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
        
        </svg>`;
  }
}

module.exports = { Square, Triangle, Circle };
