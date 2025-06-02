/**
 * Reads a file asynchronously.
 * @param filePath - The path to the file.
 * @returns {Promise<string | null>} - File contents or null on error.
 */
export declare function readFile(filePath: string): Promise<string | null>;
/**
 * Writes data to a file asynchronously.
 * @param filePath - The path to the file.
 * @param content - The content to write.
 * @returns {Promise<void>}
 */
export declare function writeFile(filePath: string, content: string): Promise<void>;
/**
 * Gets the path to the user's shell history file (best guess based on shell).
 * @param shell - Name of the shell (bash, zsh, etc.)
 * @returns {string | null}
 */
export declare function getShellHistoryPath(shell: string): string | null;
//# sourceMappingURL=files.d.ts.map