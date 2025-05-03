/**
 * Roughly estimates the number of tokens in a string.
 * @param input - Input text to estimate.
 * @returns Estimated number of tokens.
 */
export function estimateTokens(input:string):number{
    return input.trim().split(/\s+/).length
}
/**
 * Truncates a string to an approximate token limit based on word count.
 * @param input - The original text.
 * @param maxTokens - The max allowed tokens.
 * @returns Truncated string.
 */
export function truncateToTokenLimit(input: string, maxTokens: number): string {
    const words = input.trim().split(/\s+/);
    return words.slice(0, maxTokens).join(" ");
  }