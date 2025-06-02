/**
 * Checks if a value is empty (null, undefined, or empty string).
 * @param value - The value to check.
 * @returns {boolean} - True if empty, false otherwise.
 */
export declare function isEmpty(value: unknown): boolean;
/**
 * Capitalizes the first letter of a string.
 * @param str - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
export declare function capitalize(str: string): string;
/**
 * Pauses execution for a given number of milliseconds.
 * @param ms - Milliseconds to sleep.
 * @returns {Promise<void>}
 */
export declare function sleep(ms: number): Promise<void>;
/**
 * Safely parses a JSON string.
 * @param jsonString - The JSON string to parse.
 * @returns {any | null} - Parsed object or null if invalid.
 */
export declare function safeJSONParse(jsonString: string): any | null;
/**
 * Generates a random ID string.
 * @param length - Length of the ID. Default is 8.
 * @returns {string} - Random ID.
 */
export declare function generateRandomId(length?: number): string;
/**
 * Formats bytes as a readable string (e.g., 1 KB, 2 MB).
 * @param bytes - The number of bytes.
 * @returns {string} - Formatted string.
 */
export declare function formatBytes(bytes: number): string;
//# sourceMappingURL=general.d.ts.map