/**
 * Liskov substitution principle
 */
// BAD
class Bird {
    public eat() {}

    public fly() {
        // Fly logic...
    }
}

class Ostrich extends Bird {
    public fly() {
        throw new Error("I cannot fly!");
    }
}

// GOOD
class Bird {
    public eat() {}
}
class FlyingBird extends Bird {
    public fly() {}
}
class Parrot extends Bird {
    public fly() {
        // Fly logic...
    }
}
class Ostrich extends FlyingBird {
    public fly() {
        throw new Error("I cannot fly!");
    }
}
class Ostrich extends Bird {
    public eat() {
        // Eat logic...
    }
}
