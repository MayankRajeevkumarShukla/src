import dotenv from "dotenv";
dotenv.config();
export const config = {
    GROQ_API_KEY: process.env.GROQ_API_KEY || "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",
    DEFAULT_MODEL: "compound-beta",
    MAX_TOKENS: 20,
    TEMPERATURE: 0.3,
}