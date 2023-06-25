const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./lib/shapes');

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
                    message: 'What color would you like your logo to be?',
                },
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter the text for your logo (3 characters max)',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like your text to be?',
                }, 
            ])
            .then(({ text, shape, shapeColor, textColor }) => {
                this.text = `${text}`
                this.shape = `${shape}`
                this.shapeColor = `${shapeColor}`
                this.textColor = `${textColor}`
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