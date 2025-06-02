/**
 * Checks if the current directory is inside a Git repository.
 * @returns {boolean} True if inside a Git repo, false otherwise.
 */
export declare function isGitRepo(): boolean;
/**
 * Gets the current Git branch name.
 * @returns {string | null} The branch name or null if not found.
 */
export declare function getCurrentBranch(): string | null;
/**
 * Checks if there are uncommitted changes.
 * @returns {boolean} True if there are changes, false if clean.
 */
export declare function hasUncommittedChanges(): boolean;
//# sourceMappingURL=git.d.ts.map