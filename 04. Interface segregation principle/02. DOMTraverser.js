/**
 * Inteface segregation
 */
// BAD
class DOMTraverser {
    constructor(settings) {
        this.settings = settings;
        this.setup();
    }

    setup() {
        this.rootNode = this.settings.rootNode;
        this.settings.animationModule.setup();
    }

    traverse() {
        // Logic...
    }
}

const $ = new DOMTraverser({
    rootNode: document.getElementsByTagName("body"),
    animationModule() {} // Most of the time, we won't need to animate when traversing.
    // Logic...
});

// GOOD
class DOMTraverser {
    constructor(settings) {
        this.settings = settings;
        this.options = settings.options;
        this.setup();
    }

    setup() {
        this.rootNode = this.settings.rootNode;
        this.setupOptions();
    }

    setupOptions() {
        if (this.options.animationModule) {
            // Logic...
        }
    }

    traverse() {
        // Logic...
    }
}

const $ = new DOMTraverser({
    rootNode: document.getElementsByTagName("body"),
    options: {
        animationModule() {}
    }
});
