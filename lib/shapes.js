class Circle {
    render() {
        return `<circle cx="150" cy="106" r="80"`;
    }
}
class Square {
    render() {
        return `<rect x="70" y="25" width="160" height="160"`;
    }
}
class Triangle {
    render() {
        return `<polygon points="150, 5 276, 160 24, 160"`;
    }
}

function createDocument(text, shape, shapeColor, textColor) {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shape} fill="${shapeColor}"/>
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
}

module.exports = { createDocument, Circle, Square, Triangle };