import dotenv from "dotenv";
dotenv.config();
export const config = {
    GROQ_API_KEY: process.env.GROQ_API_KEY || "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",
    DEFAULT_MODEL: "mixtral-8x7b-32768",
    MAX_TOKENS: 20,
    TEMPERATURE: 0.3,
};
//# sourceMappingURL=config.js.map