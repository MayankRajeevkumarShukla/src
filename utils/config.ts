import dotenv from "dotenv";
dotenv.config();
export const config = {
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    DEFAULT_MODEL: "mixtral-8x7b-32768",
    MAX_TOKENS: 20,
    TEMPERATURE: 0.3,
}