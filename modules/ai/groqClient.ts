import axios from "axios"
import { logger } from "../../utils/logger"
import { config } from "../../utils/config"
const GROQ_API_URL = "https://api.groq.com/v1/completions"
/**
 * Fetches AI-powered autocomplete suggestion from the GROQ API.
 * @param userInput - The user's partially typed command.
 * @returns {Promise<string | null>} - The AI-generated suggestion or null on failure.
 */
export async function fetchCompletion(userInput:string):Promise<string | null>{
  if(!config.GROQ_API_KEY){
    logger.error("GROQ API Key is missing. Set it in the environment variables.")
    return null;
  }
}

