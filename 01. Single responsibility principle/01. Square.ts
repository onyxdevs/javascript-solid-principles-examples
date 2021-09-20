/**
 * Single responsibility principle
 */
// BAD
class Square {
    side = 5;

    public calculateArea() {
        return this.side * this.side;
    }

    public calculatePerimeter() {
        return this.side * 4;
    }

    public draw(resolution = "high") {
        if (resolution === "high") {
            // Render a high resolution image
        } else {
            // Render a normal image
        }
    }

    public rotate(degree = 0) {
        // Rotate the square
    }
}

// GOOD
class Square {
    side: number = 5;

    public calculateArea() {
        return this.side * this.side;
    }

    public calculatePerimeter() {
        return this.side * 4;
    }
}
class SquareUI {
    public draw(resolution: string = "high") {
        if (resolution === "high") {
            // Render a high resolution image
        } else {
            // Render a normal image
        }
    }

    public rotate(degree: number = 0) {
        // Rotate the square
    }
}
