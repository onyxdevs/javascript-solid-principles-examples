/**
 * Single responsibility principle
 */
// BAD
class Square {
    calculateArea() {
        return this.side * this.side;
    }

    calculatePerimeter() {
        return this.side * 4;
    }

    draw(resolution = "high") {
        if (resolution === "high") {
            // Render a high resolution image
        } else {
            // Render a normal image
        }
    }

    rotate(degree = 0) {
        // Rotate the square
    }
}

// GOOD
class Square {
    calculateArea() {
        return this.side * this.side;
    }

    calculatePerimeter() {
        return this.side * 4;
    }
}
class SquareUI {
    draw(resolution = "high") {
        if (resolution === "high") {
            // Render a high resolution image
        } else {
            // Render a normal image
        }
    }

    rotate(degree = 0) {
        // Rotate the square
    }
}
