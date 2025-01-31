import chalk from "chalk";

/**
 * Logger utility to handle different log levels (info, warn, error, debug).
 */
class Logger {
  private verbose: boolean = false;
  private debug: boolean = false;

  /**
   * Initialize logger with options.
   * @param options - Object containing logging preferences (verbose, debug).
   */
  init(options: { verbose?: boolean; debug?: boolean }) {
    this.verbose = options.verbose || false;
    this.debug = options.debug || false;
  }

  /**
   * Logs general info messages.
   * @param message - The message to log.
   */
  info(message: string) {
    console.log(chalk.blue("[INFO]"), message);
  }

  /**
   * Logs warning messages.
   * @param message - The warning message.
   */
  warn(message: string) {
    console.warn(chalk.yellow("[WARN]"), message);
  }

  /**
   * Logs error messages.
   * @param message - The error message.
   */
  error(message: string, err?: Error) {
    console.error(chalk.red("[ERROR]"), message);
    if (err) console.error(chalk.red(err.stack || err.message));
  }

  /**
   * Logs debug messages (only if debug mode is enabled).
   * @param message - The debug message.
   */
  debugLog(message: string) {
    if (this.debug) {
      console.log(chalk.magenta("[DEBUG]"), message);
    }
  }

  /**
   * Logs verbose messages (only if verbose mode is enabled).
   * @param message - The verbose message.
   */
  verboseLog(message: string) {
    if (this.verbose) {
      console.log(chalk.cyan("[VERBOSE]"), message);
    }
  }
}

// Export a single instance of Logger
export const logger = new Logger();
