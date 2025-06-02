const cache = new Map();
/**
* Retrieves a cached suggestion if available.
 * @param userInput - The user's input command.
 * @returns {string | null} - The cached suggestion or null if not found.
 */
export function getCachedSuggestion(userInput) {
    return cache.get(userInput) || null;
}
/**
 * Caches a new autocomplete suggestion.
 * @param userInput - The original command input.
 * @param suggestion - The AI-generated suggestion .
 */
export function cacheSuggestion(userInput, suggestion) {
    cache.set(userInput, suggestion);
}
/**
 * Caches a new autocomplete suggestion.
 * @param userInput - The original command input.
 * @param suggestion - The AI-generated suggestion.
 *
 */
/**
 * Clears the autocomplete cache (useful for debugging or refreshing suggestions).
 */
export function clearCache() {
    cache.clear();
}
//# sourceMappingURL=cache.js.map