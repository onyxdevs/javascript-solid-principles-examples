/**
 * Open-closed principle
 */
// Bad
class AjaxAdapter extends Adapter {
    constructor() {
        super();
        this.name = "ajaxAdapter";
    }
}

class NodeAdapter extends Adapter {
    constructor() {
        super();
        this.name = "nodeAdapter";
    }
}

class HttpRequester {
    constructor(adapter) {
        this.adapter = adapter;
    }

    fetch(url) {
        if (this.adapter.name === "ajaxAdapter") {
            return makeAjaxCall(url).then((response) => {
                // transform response and return
            });
        } else if (this.adapter.name === "nodeAdapter") {
            return makeHttpCall(url).then((response) => {
                // transform response and return
            });
        }
    }
}

function makeAjaxCall(url) {
    // request and return promise
}

function makeHttpCall(url) {
    // request and return promise
}

// Good
class AjaxAdapter extends Adapter {
    constructor() {
        super();
        this.name = "ajaxAdapter";
    }

    request(url) {
        // request and return promise
    }
}

class NodeAdapter extends Adapter {
    constructor() {
        super();
        this.name = "nodeAdapter";
    }

    request(url) {
        // request and return promise
    }
}

class HttpRequester {
    constructor(adapter) {
        this.adapter = adapter;
    }

    fetch(url) {
        return this.adapter.request(url).then((response) => {
            // transform response and return
        });
    }
}
