const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument, Circle, Square, Triangle } = require('./lib/shapes');

class CLI {
    constructor() {
        this.text = '';
        this.shape = '';
        this.textColor = '';
        this.shapeColor = '';
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Select the desired shape',
                    choices: ['circle', 'square', 'triangle'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color would you like your logo to be? (If using hex color please include the #)',
                },
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter the text for your logo (3 characters max)',
                    validate: function (text) {
                        if (text.length > 3) {
                            return console.log(' Logo text must be 3 characters or less!')
                        }
                        return true;
                    }
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like your text to be?  (If using hex color please include the #)',
                }, 
            ])
            .then(({ text, shape, shapeColor, textColor }) => {
                if (shape === 'circle') {
                    this.shape = new Circle().render();
                } else if (shape === 'square') {
                    this.shape = new Square().render();
                } else {
                    this.shape = new Triangle().render();
                };
                this.text = `${text}`;
                this.shapeColor = `${shapeColor}`;
                this.textColor = `${textColor}`;
            })
            .then(() => {
                return writeFile(
                    join(__dirname, '..', 'svg-logo-maker', 'examples', 'logo.svg'),
                    createDocument(this.text, this.shape, this.shapeColor, this.textColor)
                );
            })
            .then(() => console.log('Generated logo.svg'))
            .catch((err) => {
                console.log(err);
                console.log('Something went wrong.')
            })
    }
}

const cli = new CLI();
cli.run();