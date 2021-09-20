/**
 * Single responsibility principle
 * @see {@link https://www.datascienceblog.net/post/programming/object-oriented-design-solid-principles/}
 */
// BAD
class Bike {
    leaseDurationSeconds;
    isLocked;
    leasingCustomer;

    lock() {}
    unlock() {}

    startLease(customer) {}
    endLease() {}

    calculateCosts() {}
    addInvoice() {}
    createInvoice() {}
}

// GOOD
class Lease {
    leasingCustomer;
    invoice;
    leaseStart;
    leaseEnd;

    startLease(customer) {}
    endLease() {}
}

class InvoiceGenerator {
    leaseDurationSeconds;
    dollarCostsPerSecond = 0.001;
    customer;

    setLeaseDuration(leaseDurationSeconds) {}
    setCustomer(customer) {}
    addInvoice() {}
    createInvoice() {}
    calculateCost() {}
}

class Bike {
    isLocked;
    lease;

    lock() {}
    unlock() {}

    startLease(customer) {}
    endLease() {}
}
