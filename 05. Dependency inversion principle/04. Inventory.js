/**
 * Dependency inversion
 */
// BAD
class InventoryRequester {
    constructor() {
        this.REQ_METHODS = ["HTTP"];
    }

    requestItem(item) {
        // Logic...
    }
}

class InventoryTracker {
    constructor(items) {
        this.items = items;

        // BAD: We have created a dependency on a specific request implementation.
        // We should just have requestItems depend on a request method: `request`
        this.requester = new InventoryRequester();
    }

    requestItems() {
        this.items.forEach((item) => {
            this.requester.requestItem(item);
        });
    }
}

const inventoryTracker = new InventoryTracker(["apples", "bananas"]);
inventoryTracker.requestItems();

// GOOD
class InventoryTracker {
    constructor(items, requester) {
        this.items = items;
        this.requester = requester;
    }

    requestItems() {
        this.items.forEach((item) => {
            this.requester.requestItem(item);
        });
    }
}

class InventoryRequesterV1 {
    constructor() {
        this.REQ_METHODS = ["HTTP"];
    }

    requestItem(item) {
        // Logic...
    }
}

class InventoryRequesterV2 {
    constructor() {
        this.REQ_METHODS = ["WS"];
    }

    requestItem(item) {
        // Logic...
    }
}

// By constructing our dependencies externally and injecting them, we can easily
// substitute our request module for a fancy new one that uses WebSockets.
const inventoryTracker = new InventoryTracker(["apples", "bananas"], new InventoryRequesterV2());
inventoryTracker.requestItems();
