/**
 * Dependency inversion
 */
// BAD
class Alarm {
    start() {
        // Logic...
    }
    stop() {
        // Logic...
    }
}

class NiceHouse {
    isBreak = false;
    alarm = null;

    constructor() {
        this.alarm = new Alarm();
    }

    onBreak() {
        if (this.isBreak) {
            this.alarm.start();
            this.isBreak = false;
        } else {
            this.alarm.stop();
            this.isBreak = true;
        }
    }
}

// GOOD
class Alarm {
    start() {}
    stop() {}
}

class HouseAlarm extends Alarm {
    start() {
        // Logic...
    }
    stop() {
        // Logic...
    }
}

class NiceHouse {
    isBreak = false;
    alarm = null;

    constructor() {
        this.alarm = new HouseAlarm();
    }

    onBreak() {
        if (this.isBreak) {
            this.alarm.start();
            this.isBreak = false;
        } else {
            this.alarm.stop();
            this.isBreak = true;
        }
    }
}
