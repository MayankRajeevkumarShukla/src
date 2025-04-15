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
  try {
    const response = await axios.post(
      GROQ_API_URL,
      {
        model:"mixtral-8x7b-32768",
        prompt:`Suggest the next part of the command : ${userInput}` ,
        max_tokens:20,
        temperature: 0.3,
      },
      {
        headers:{
          Authorization:`Bearer ${config.GROQ_API_KEY}`,
          "Content-Type":"application/json",
        }
      }
    )
    const suggestion = response.data?.choices?.[0]?.text?.trim();

    if(!suggestion) throw new Error("Invalid response from GROQ API")
      logger.info(`AI Suggestion: ${suggestion}`)
    return suggestion;
  } catch (error) {
    logger.error("Error fetching AI completion",error as Error)
    return null;
  }

}

