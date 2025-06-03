import axios from "axios";
import { logger } from "../../utils/logger";
import { config } from "../../utils/config";
import { truncateToTokenLimit } from "./tokenizer"; 

// Correct endpoint for chat completions
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function fetchCompletion(userInput: string): Promise<string | null> {
  if (!config.GROQ_API_KEY) {
    logger.error("GROQ API Key is missing. Set it in the environment variables.");
    return null;
  }

  const safePrompt = truncateToTokenLimit(userInput, 50); 

  try {
    const response = await axios.post(
      GROQ_API_URL,
      {
        model: "gemma2-9b-it",
        messages: [
          {
            role: "system",
            content: "You are a terminal autocomplete system. Respond ONLY with the most likely command completion. No explanations, no formatting, no markdown. Just the completion text that would follow the user's input. Examples: if user types 'git ', respond with 'status' or 'add'. If user types 'npm ', respond with 'install' or 'start'. Be concise - one word or short phrase only."
          },
          {
            role: "user", 
            content: `${safePrompt}`
          }
        ],
        max_tokens: 15,
        temperature: 0.3,
        stream: false
      },
      {
        headers: {
          Authorization: `Bearer ${config.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 10000 // 10 second timeout
      }
    );

    const suggestion = response.data?.choices?.[0]?.message?.content?.trim();
    if (!suggestion) {
      logger.error("No valid response from GROQ API");
      return null;
    }

    logger.info(`AI Suggestion: ${suggestion}`);
    return suggestion;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const statusText = error.response?.statusText;
      const errorData = error.response?.data;
      
      logger.error(`GROQ API Error: ${status} ${statusText}`);
      logger.error('Error details:', errorData);
      
      // Specific error handling
      if (status === 401) {
        logger.error("Authentication failed. Check your GROQ_API_KEY.");
      } else if (status === 404) {
        logger.error("API endpoint not found. This usually means wrong URL or model.");
      } else if (status === 429) {
        logger.error("Rate limit exceeded. Please try again later.");
      } else if (status === 400) {
        logger.error("Bad request. Check your request parameters.");
      }
    } else {
      logger.error("Error fetching AI completion", error as Error);
    }
    return null;
  }
}