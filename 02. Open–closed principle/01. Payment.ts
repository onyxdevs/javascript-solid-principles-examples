/**
 * Open-closed principle
 */
// Bad
class Payment {
    paymentType: string;

    constructor(paymentType: string) {
        this.paymentType = paymentType;
    }

    pay(amount: number) {
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
interface IPayment {
    pay(amount: number): string;
}
class Stripe implements IPayment {
    pay(amount: number) {
        // Handle payment
        return `${amount} paid with Stripe.`;
    }
}
class Paypal implements IPayment {
    pay(amount: number) {
        // Handle payment
        return `${amount} paid with Paypal.`;
    }
}
class CreditCard implements IPayment {
    pay(amount: number) {
        // Handle payment
        return `${amount} paid with Credit Card.`;
    }
}
