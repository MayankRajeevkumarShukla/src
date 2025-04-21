import {execSync} from "child_process"
import { logger } from "../../utils/logger"
/**
 * Checks if the current directory is inside a Git repository.
 * @returns {boolean} True if inside a Git repo, false otherwise.
 */
export function isGitRepo():boolean{
    try {
        execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" })
        return true
    } catch (error) {
        return false;
    }
}
/**
 * Gets the current Git branch name.
 * @returns {string | null} The branch name or null if not found.
 */
export function getCurrentBranch(): string | null{
    try {
        const branch = execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf-8" });
        return branch.trim();
      } catch (error) {
        logger.debugLog("Failed to get current Git branch.", error as Error);
        return null;
      }
}
/**
 * Checks if there are uncommitted changes.
 * @returns {boolean} True if there are changes, false if clean.
 */
export function hasUncommittedChanges(): boolean {
    try {
      const status = execSync("git status --porcelain", { encoding: "utf-8" });
      return status.trim().length > 0;
    } catch (error) {
      logger.debugLog("Failed to check Git status.", error as Error);
      return false;
    }
  }