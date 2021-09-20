/**
 * Liskov substitution principle
 */
// BAD
class Bird {
    eat() {}

    fly() {
        // Fly logic...
    }
}

class Ostrich extends Bird {
    fly() {
        throw new Error("I cannot fly!");
    }
}

// GOOD
class Bird {
    eat() {}
}
class FlyingBird extends Bird {
    fly() {}
}
class Parrot extends FlyingBird {
    fly() {
        // Fly logic...
    }
}
class Ostrich extends Bird {
    eat() {
        // Eat logic...
    }
}
