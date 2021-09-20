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
    private isBreak = false;

    constructor(private alarm: Alarm) {
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
interface IAlarm {
    start();
    stop();
}

class HouseAlarm implements IAlarm {
    start() {
        // Logic...
    }
    stop() {
        // Logic...
    }
}

class NiceHouse {
    private isBreak = false;

    constructor(private alarm: IAlarm) {
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
