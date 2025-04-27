/**
 * Checks if a value is empty (null, undefined, or empty string).
 * @param value - The value to check.
 * @returns {boolean} - True if empty, false otherwise.
 */
export function isEmpty(value: unknown): boolean {
    return value === null || value === undefined || (typeof value === "string" && value.trim() === "");
  }
  
  /**
   * Capitalizes the first letter of a string.
   * @param str - The string to capitalize.
   * @returns {string} - The capitalized string.
   */
  export function capitalize(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  /**
   * Pauses execution for a given number of milliseconds.
   * @param ms - Milliseconds to sleep.
   * @returns {Promise<void>}
   */
  export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  /**
   * Safely parses a JSON string.
   * @param jsonString - The JSON string to parse.
   * @returns {any | null} - Parsed object or null if invalid.
   */
  export function safeJSONParse(jsonString: string): any | null {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return null;
    }
  }
  
  /**
   * Generates a random ID string.
   * @param length - Length of the ID. Default is 8.
   * @returns {string} - Random ID.
   */
  export function generateRandomId(length = 8): string {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  
  /**
   * Formats bytes as a readable string (e.g., 1 KB, 2 MB).
   * @param bytes - The number of bytes.
   * @returns {string} - Formatted string.
   */
  export function formatBytes(bytes: number): string {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  