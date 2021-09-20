/**
 * Open-closed principle
 */
// Bad
class Payment {
    constructor(paymentType) {
        this.paymentType = paymentType;
    }

    pay(amount) {
        if (this.paymentType === "stripe") {
            // Handle payment
            return `${amount} paid with Stripe.`;
        }
        if (this.paymentType === "paypal") {
            // Handle payment
            return `${amount} paid with Paypal.`;
        }
        if (this.paymentType === "creditCard") {
            // Handle payment
            return `${amount} paid with Credit Card.`;
        }
    }
}

// Good
class IPayment {
    pay() {}
}
class Stripe extends IPayment {
    pay(amount) {
        // Handle payment
        return `${amount} paid with Stripe.`;
    }
}
class Paypal extends IPayment {
    pay(amount) {
        // Handle payment
        return `${amount} paid with Paypal.`;
    }
}
class CreditCard extends IPayment {
    pay(amount) {
        // Handle payment
        return `${amount} paid with Credit Card.`;
    }
}
