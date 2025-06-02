/**
* Retrieves a cached suggestion if available.
 * @param userInput - The user's input command.
 * @returns {string | null} - The cached suggestion or null if not found.
 */
export declare function getCachedSuggestion(userInput: string): string | null;
/**
 * Caches a new autocomplete suggestion.
 * @param userInput - The original command input.
 * @param suggestion - The AI-generated suggestion .
 */
export declare function cacheSuggestion(userInput: string, suggestion: string): void;
/**
 * Caches a new autocomplete suggestion.
 * @param userInput - The original command input.
 * @param suggestion - The AI-generated suggestion.
 *
 */
/**
 * Clears the autocomplete cache (useful for debugging or refreshing suggestions).
 */
export declare function clearCache(): void;
//# sourceMappingURL=cache.d.ts.map