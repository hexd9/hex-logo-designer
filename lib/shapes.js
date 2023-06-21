// Exports `Triangle`, `Circle`, and `Square` classes
class Circle {
    constructor(text, colorShape, colorText){
        this.text = text
        this.colorShape = colorShape
        this.colorText = colorText
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="25" cy="75" r="20" stroke="red" fill="${this.colorShape}" stroke-width="5"/>
        <text fill = "${this.colorText}">${this.text}</text>
        
        </svg>`
    }
};
class Triangle {
    constructor(text, colorShape, colorText){
        this.text = text
        this.colorShape = colorShape
        this.colorText = colorText
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
        <polygon points="250,60 100,400 400,400" class="triangle" fill="${this.colorShape}"/>
        <text fill = "${this.colorText}">${this.text}</text>
        
        </svg>`
    }
};
class Square {
    constructor(text, colorShape, colorText){
        this.text = text
        this.colorShape = colorShape
        this.colorText = colorText
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
        <rect width="300" height="300" fill="${this.colorShape}" />
        <text fill = "${this.colorText}">${this.text}</text>
        
        </svg>`
    }
}

module.exports = {Square, Triangle, Circle}
