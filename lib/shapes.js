class Shape {
    constructor(children) {
        this.children = children
    }
    render() {
        throw new Error('Must implement a render() method.')
    }
    renderinnerSVG() {
        return this.children
            .map((child) => {
                if (typeof child === 'string') {
                    return child;
                }
                return child.render();
            })
            .join('');
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80"`;
    }
}
class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="160" height="160"`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182"`;
    }
}

function createDocument(text, shape, shapeColor, textColor) {
    if (shape === 'circle') {
        const newShape = new Circle().render();
    } else if (shape === 'square') {
        const newShape = new Square().render();
    } else {
        const newShape = new Triangle().render();
    }
    return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            ${shape} fill="${shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
}

module.exports = { createDocument }