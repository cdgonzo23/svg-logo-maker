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
                    choices: ['Circle', 'Square', 'Triangle'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color would you like your logo to be?',
                },
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter the text for your logo',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like your text to be?',
                }, 
            ])
            .then(() => {
                this.text = `${text}`
                this.shape = `${shape}`
                this.shapeColor = `${shapeColor}`
                this.textColor = `${textColor}`
            })
            .then(() => {
                return writeFile(
                    join(__dirname, '..', 'examples', 'logo.html'),
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