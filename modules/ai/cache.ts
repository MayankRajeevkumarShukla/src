const cache = new Map<string,string>();
/**
* Retrieves a cached suggestion if available.
 * @param userInput - The user's input command.
 * @returns {string | null} - The cached suggestion or null if not found.
 */
export function getCachedSuggestion(userInput:string): string | null{
    return cache.get(userInput) ||null;
}
/**
 * Caches a new autocomplete suggestion.
 * @param userInput - The original command input.
 * @param suggestion - The AI-generated suggestion .
 */
export function cacheSuggestion(userInput:string,suggestion:string): void{
    cache.set(userInput,suggestion)
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
export function clearCache() : void{
    cache.clear()
}