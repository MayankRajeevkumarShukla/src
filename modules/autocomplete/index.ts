import {logger} from "../../utils/logger"
import {getCachedSuggestion,chacheSuggestion} from "../ai/cache"
import {fetchCompletion} from "../ai/groqClient"

/**
 * Generates an AI-powered autocomplete suggestion for a given command.
 * @param userInput - The user's partially typed command.
 * @returns {Promise<string | null>} - The suggested completion or null.
 */
export async function getAutoComplete(userInput: string): Promise<string | null> {
    if(!userInput.trim()) return null;
    const cached = getCachedSuggestion() 
    if(cached){
        logger.verboseLog("Using cached autocomplete suggestion.")
        return cached
    }
    try {
         const suggestion = await fetchCompletion(userInput)
         if(suggestion){
            chacheSuggestion(userInput,suggestion)
            logger.info(`Autocomplete suggestion: ${suggestion}`)
            return suggestion
         }
    } catch (error) {
        logger.error("Error fetching autocomplete suggestion:",error as Error)
    }
    return null

}