/**
 * Liskov substitution principle
 */
// BAD
class Account {
    processLocalTransfer() {}
    processInternationalTransfer() {}
}

class SchoolAccount extends Account {
    processLocalTransfer(amount) {
        // business logic here
    }
    processInternationalTransfer(amount) {
        throw new Error("Not Implemented");
    }
}

const account = new SchoolAccount();
account.processInternationalTransfer(10000); // will crash

// GOOD
class LocalAccount {
    processLocalTransfer() {}
}

class SchoolAccount extends LocalAccount {
    processLocalTransfer(amount) {
        // business logic here
    }
}
