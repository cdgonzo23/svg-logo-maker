const { Circle, Square, Triangle } = require('./shapes');

describe('circle', () => {
    it ('will return a logo in the shape of a circle.', () => {
        const shape = new Circle();
        expect(shape.render()).toEqual('<circle cx="150" cy="106" r="80"');
    })
})
describe('square', () => {
    it ('will return a logo in the shape of a circle.', () => {
        const shape = new Square();
        expect(shape.render()).toEqual('<rect x="70" y="25" width="160" height="160"');
    })
})
describe('triangle', () => {
    it ('will return a logo in the shape of a circle.', () => {
        const shape = new Triangle();
        expect(shape.render()).toEqual('<polygon points="150, 5 276, 160 24, 160"');
    })
})