// Runs the application using imports from lib/
const {writeFile} = require("fs").promises
const inquirer = require("inquirer")
const {Triangle, Circle, Square} = require('./lib/shapes')

inquirer.prompt([
    {
        type: 'input',
        message: 'what is the color of the shape?',
        name: 'colorShape'
    }, 
    {
        type: 'input',
        message: 'what is the color of the text?',
        name: 'colorText'
    },
    {
        type: 'list',
        message: 'Select shape',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        message: 'What is the message inside of shape?',
        name: 'text',
    },
]).then(function(response) {
    let shape 
    switch(response.shape) {
        case 'Triangle':
            // create triangle
            shape = new Triangle(response.text, response.colorShape, response.colorText) 
            break
        case 'Circle':
            // create circle
            shape = new Circle(response.text, response.colorShape, response.colorText) 
            break
        case 'Square':
            // create square
            shape = new Square(response.text, response.colorShape, response.colorText) 
            break
    }
    writeFile('shape.svg', shape.render())
})