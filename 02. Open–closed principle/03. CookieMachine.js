/**
 * Open-closed principle
 */
// Bad
class CookieMachine {
    constructor() {
        // Sophisticated setup process
    }

    makeCookie(cookieType) {
        switch (cookieType) {
            case "chocolate-chip-cookie":
                return "Chocolate chip cookie";
            case "fortune-cookie":
                return "Fortune cookie";
            default:
                throw "Unknown cookie type.";
        }
    }
}

// Good
class CookieRecipe {
    constructor() {
        // Sophisticated setup process
    }

    cook() {
        // Abstract cooking process
    }
}

class ChocolateChipCookieRecipe extends CookieRecipe {
    constructor() {
        super();
        this.cookieType = "chocolate-chip-cookie";
        // Sophisticated setup process
    }

    cook() {
        return "Chocolate chip cookie";
    }
}

class FortuneCookieRecipe extends CookieRecipe {
    constructor() {
        super();
        this.cookieType = "fortune-cookie";
        // Sophisticated setup process
    }

    cook() {
        return "Fortune cookie";
    }
}

class PepperCookieRecipe extends CookieRecipe {
    constructor() {
        super();
        this.cookieType = "pepper-cookie";
        // Sophisticated setup process
    }

    cook() {
        return "Pepper cookie";
    }
}
