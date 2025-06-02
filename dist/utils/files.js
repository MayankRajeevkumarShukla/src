import fs from "fs";
import path from "path";
import os from "os";
import { logger } from "./logger";
/**
 * Reads a file asynchronously.
 * @param filePath - The path to the file.
 * @returns {Promise<string | null>} - File contents or null on error.
 */
export async function readFile(filePath) {
    try {
        const data = await fs.promises.readFile(filePath, "utf-8");
        return data;
    }
    catch (err) {
        logger.debugLog(`Failed to read file: ${filePath}`, err);
        return null;
    }
}
/**
 * Writes data to a file asynchronously.
 * @param filePath - The path to the file.
 * @param content - The content to write.
 * @returns {Promise<void>}
 */
export async function writeFile(filePath, content) {
    try {
        await fs.promises.writeFile(filePath, content, "utf-8");
    }
    catch (err) {
        logger.debugLog(`Failed to write file: ${filePath}`, err);
    }
}
/**
 * Gets the path to the user's shell history file (best guess based on shell).
 * @param shell - Name of the shell (bash, zsh, etc.)
 * @returns {string | null}
 */
export function getShellHistoryPath(shell) {
    const homeDir = os.homedir();
    switch (shell) {
        case "bash":
            return path.join(homeDir, ".bash_history");
        case "zsh":
            return path.join(homeDir, ".zsh_history");
        case "fish":
            return path.join(homeDir, ".local", "share", "fish", "fish_history");
        default:
            return null;
    }
}
//# sourceMappingURL=files.js.map