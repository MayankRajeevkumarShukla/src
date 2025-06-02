import process from "process";
import { logger } from "./logger";
/**
 * Detects the user's shell environment.
 * Supports: bash, zsh, PowerShell, fish, cmd, etc.
 * @returns {string} - The detected shell name.
 */
export function detectShell() {
    try {
        const shellPath = process.env.shell || process.env.COMSPEC;
        if (!shellPath) {
            logger.warn("Could not detect shell automatically. Defaulting to 'unknown'.");
            return "unknown";
        }
        const shellName = shellPath.split("/").pop()?.toLowerCase() || "unknown";
        logger.info(`Detected shell: ${shellName}`);
        return shellName;
    }
    catch (error) {
        logger.error("Error detecting shell:", error);
        return "unknown";
    }
}
//# sourceMappingURL=env.js.map