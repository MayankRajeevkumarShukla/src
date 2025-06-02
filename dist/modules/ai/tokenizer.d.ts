/**
 * Roughly estimates the number of tokens in a string.
 * @param input - Input text to estimate.
 * @returns Estimated number of tokens.
 */
export declare function estimateTokens(input: string): number;
/**
 * Truncates a string to an approximate token limit based on word count.
 * @param input - The original text.
 * @param maxTokens - The max allowed tokens.
 * @returns Truncated string.
 */
export declare function truncateToTokenLimit(input: string, maxTokens: number): string;
//# sourceMappingURL=tokenizer.d.ts.map