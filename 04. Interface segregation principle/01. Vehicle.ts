/**
 * Inteface segregation
 */
// BAD
interface IVehicle {
    setPrice(price: number): void;
    setColor(color: string): void;
    start(): void;
    stop(): void;
    fly(): void;
}

class Car implements Vehicle {
    price: number;
    color: string;

    public setPrice(price: number): void {
        this.price = price;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public start(): void {}

    public stop(): void {}

    public fly(): void {}
}

// GOOD
interface IVehicle {
    setPrice(price: number): void;
    setColor(color: string): void;
}
interface IMovable {
    start(): void;
    stop(): void;
}
interface IFlyable {
    fly(): void;
}

class Car implements IVehicle, IMovable {
    price: number;
    color: string;

    public setPrice(price: number): void {
        this.price = price;
    }
    public setColor(color: string): void {
        this.color = color;
    }
    public start(): void {
        // Logic...
    }
    public stop(): void {
        // Logic...
    }
}

class Airplane implements IVehicle, IMovable, IFlyable {
    price: number;
    color: string;

    public setPrice(price: number): void {
        this.price = price;
    }
    public setColor(color: string): void {
        this.color = color;
    }
    public start(): void {
        // Logic...
    }
    public stop(): void {
        // Logic...
    }
    public fly(): void {
        // Logic...
    }
}
