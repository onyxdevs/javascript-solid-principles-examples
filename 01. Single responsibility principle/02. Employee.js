/**
 * Single responsibility principle
 * @see {@link https://khalilstemmler.com/articles/solid-principles/solid-typescript/#SRP}
 */
// BAD
class Employee {
    calculatePay() {
        // implement algorithm for hr, accounting and it
    }
    reportHours() {
        // implement algorithm for hr, accounting and it
    }
    save() {
        // implement algorithm for hr, accounting and it
    }
}

// GOOD
class Employee {
    save() {
        // common save algorithm
    }
}

class HR extends Employee {
    calculatePay() {
        // implement own algorithm
    }
    reportHours() {
        // implement own algorithm
    }
}

class Accounting extends Employee {
    calculatePay() {
        // implement own algorithm
    }
    reportHours() {
        // implement own algorithm
    }
}

class IT extends Employee {
    // ...
}
