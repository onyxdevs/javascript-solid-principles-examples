/**
 * Dependency inversion
 */
// BAD
class Logger {
    _fileSystem = new NtfsFileSystem();

    Log(text) {
        const fileStream = _fileSystem.OpenFile("log.txt");
        fileStream.Write(text);
        fileStream.Dispose();
    }
}

// GOOD
class Loggable {
    Log(textToLog) {}
}

class NtfsFileSystem extends Loggable {
    Log(textToLog) {
        // File handling, writing and disposing.
    }
}

class Logger2 {
    _logService;

    Logger(logService) {
        if (!logService) throw new ReferenceError("logService cannot be null.");

        _logService = logService;
    }

    Log(text) {
        _logService.Log(text);
    }
}
