import { logger } from "../../utils/logger";
import { getCachedSuggestion, cacheSuggestion } from "../ai/cache";
import { fetchCompletion } from "../ai/groqClient";
/**
 * Generates an AI-powered autocomplete suggestion for a given command.
 * @param userInput - The user's partially typed command.
 * @returns {Promise<string | null>} - The suggested completion or null.
 */
export async function getAutoComplete(userInput) {
    if (!userInput.trim())
        return null;
    // Check cache before hitting the API
    const cached = getCachedSuggestion(userInput);
    if (cached) {
        logger.verboseLog("Using cached autocomplete suggestion.");
        return cached;
    }
    try {
        // Fetch AI-based autocomplete suggestion
        const suggestion = await fetchCompletion(userInput);
        if (suggestion) {
            cacheSuggestion(userInput, suggestion); // Store suggestion in cache
            logger.info(`Autocomplete suggestion: ${suggestion}`);
            return suggestion;
        }
    }
    catch (error) {
        logger.error("Error fetching autocomplete suggestion:", error);
    }
    return null;
}
//# sourceMappingURL=index.js.map