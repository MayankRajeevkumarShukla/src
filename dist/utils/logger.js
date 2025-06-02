import chalk from "chalk";
/**
 * Logger utility to handle different log levels (info, warn, error, debug).
 */
class Logger {
    constructor() {
        this.verbose = false;
        this.debug = false;
    }
    /**
     * Initialize logger with options.
     * @param options - Object containing logging preferences (verbose, debug).
     */
    init(options) {
        this.verbose = options.verbose || false;
        this.debug = options.debug || false;
    }
    /**
     * Enables verbose logging.
     */
    enableVerbose() {
        this.verbose = true;
    }
    /**
     * Enables debug logging.
     */
    enableDebug() {
        this.debug = true;
    }
    /**
     * Logs general info messages.
     * @param message - The message to log.
     */
    info(message) {
        console.log(chalk.blue("[INFO]"), message);
    }
    /**
     * Logs warning messages.
     * @param message - The warning message.
     */
    warn(message) {
        console.warn(chalk.yellow("[WARN]"), message);
    }
    /**
     * Logs error messages.
     * @param message - The error message.
     */
    error(message, err) {
        console.error(chalk.red("[ERROR]"), message);
        if (err)
            console.error(chalk.red(err.stack || err.message));
    }
    /**
     * Logs debug messages (only if debug mode is enabled).
     * @param message - The debug message.
     * @param err - Optional error object to log stack trace.
     */
    debugLog(message, err) {
        if (this.debug) {
            console.log(chalk.magenta("[DEBUG]"), message);
            if (err)
                console.debug(chalk.gray(err.stack || err.message));
        }
    }
    /**
     * Logs verbose messages (only if verbose mode is enabled).
     * @param message - The verbose message.
     */
    verboseLog(message) {
        if (this.verbose) {
            console.log(chalk.cyan("[VERBOSE]"), message);
        }
    }
}
// Export a single instance of Logger
export const logger = new Logger();
//# sourceMappingURL=logger.js.map