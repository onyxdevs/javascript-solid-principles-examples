/**
 * Inteface segregation
 */
// BAD
class Bird {
    fly() {}
    walk() {}
}

class Duck extends Bird {
    fly() {
        // Duck can't fly
    }
    walk() {
        // Duck can walk
    }
}

class Ostrich extends Bird {
    fly() {
        // Ostrich cant fly... throw some error
    }
    walk() {
        // Ostrich can walk
    }
}

// GOOD
class FlightfulBird {
    fly() {}
}

class WalkableBird {
    walk() {}
}

const Duck = new Function();
Object.assign(Duck.prototype, FlightfulBird.prototype, WalkableBird.prototype);
Duck.fly(); // // Duck can't fly
Duck.walk(); // Duck can walk

const Ostrich = new Function();
Object.assign(Ostrich.prototype, WalkableBird.prototype);
Ostrich.walk(); // Ostrich can walk
