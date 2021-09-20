/**
 * Inteface segregation
 */
// BAD
class Vehicle {
    setPrice() {}
    setColor() {}
    start() {}
    stop() {}
    fly() {}
}

class Car extends Vehicle {
    setPrice(price) {
        this.price = price;
    }

    setColor(color) {
        this.color = color;
    }

    start() {}

    stop() {}

    fly() {}
}

// GOOD
class Vehicle {}
const vehicleMethods = {
    setPrice() {},
    setColor() {}
};
Object.assign(Vehicle.prototype, vehicleMethods);

class Movable {}
const movableMethods = {
    start() {},
    stop() {}
};
Object.assign(Movable.prototype, movableMethods);

class Flyable {}
const flyableMethods = {
    fly() {}
};
Object.assign(Flyable.prototype, flyableMethods);

const Car = new Function();
Object.assign(Car.prototype, Vehicle.prototype, Movable.prototype);

const Airplane = new Function();
Object.assign(Airplane.prototype, Vehicle.prototype, Movable.prototype, Flyable.prototype);
