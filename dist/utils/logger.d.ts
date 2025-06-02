/**
 * Logger utility to handle different log levels (info, warn, error, debug).
 */
declare class Logger {
    private verbose;
    private debug;
    /**
     * Initialize logger with options.
     * @param options - Object containing logging preferences (verbose, debug).
     */
    init(options: {
        verbose?: boolean;
        debug?: boolean;
    }): void;
    /**
     * Enables verbose logging.
     */
    enableVerbose(): void;
    /**
     * Enables debug logging.
     */
    enableDebug(): void;
    /**
     * Logs general info messages.
     * @param message - The message to log.
     */
    info(message: string): void;
    /**
     * Logs warning messages.
     * @param message - The warning message.
     */
    warn(message: string): void;
    /**
     * Logs error messages.
     * @param message - The error message.
     */
    error(message: string, err?: Error): void;
    /**
     * Logs debug messages (only if debug mode is enabled).
     * @param message - The debug message.
     * @param err - Optional error object to log stack trace.
     */
    debugLog(message: string, err?: Error): void;
    /**
     * Logs verbose messages (only if verbose mode is enabled).
     * @param message - The verbose message.
     */
    verboseLog(message: string): void;
}
export declare const logger: Logger;
export {};
//# sourceMappingURL=logger.d.ts.map