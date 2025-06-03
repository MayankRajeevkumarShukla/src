import { Command } from "commander";
import { version } from "../package.json";
import readline from "readline";
import { getAutoComplete } from "../modules/autocomplete/index";
import { logger } from "../utils/logger";

// Function to handle interactive mode with real-time suggestions
function startInteractiveCLI() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "$ ",
    completer: async (line: string) => {
      // This gets called when user presses TAB
      if (line.trim().length === 0) return [[], line];
      
      try {
        const suggestion = await getAutoComplete(line.trim());
        if (suggestion && suggestion.length > 0) {
          const cleanSuggestion = cleanAISuggestion(suggestion, line.trim());
          if (cleanSuggestion) {
            return [[line + cleanSuggestion], line];
          }
        }
        return [[], line];
      } catch (error) {
        return [[], line];
      }
    }
  });

  console.log("🚀 Terminal IntelliSense Active");
  console.log("💡 Press TAB for AI-powered completions");
  console.log("📝 Type 'exit' to quit\n");
  
  rl.prompt();

  rl.on("line", async (input) => {
    const trimmedInput = input.trim();
    
    if (trimmedInput.toLowerCase() === "exit") {
      console.log("👋 Goodbye!");
      rl.close();
      return;
    }

    if (trimmedInput === "") {
      rl.prompt();
      return;
    }

    // Simulate command execution feedback
    console.log(`⚡ Executing: ${trimmedInput}`);
    
    rl.prompt();
  });

  // Handle Ctrl+C gracefully
  rl.on("SIGINT", () => {
    console.log("\n👋 Goodbye!");
    process.exit(0);
  });

  rl.on("close", () => {
    console.log("\n👋 Goodbye!");
    process.exit(0);
  });
}

// Helper function to clean AI suggestions
function cleanAISuggestion(suggestion: string, originalInput: string): string {
  let clean = suggestion
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting
    .replace(/^\s*[\*\-]\s*/, '') // Remove bullet points
    .replace(/^Here are.*?:/gi, '') // Remove explanatory prefixes
    .replace(/^The most.*?is:/gi, '') // Remove explanatory prefixes
    .replace(/\n.*$/s, '') // Take only first line
    .trim();

  // Remove the original input if it's repeated
  const inputWords = originalInput.split(' ');
  const lastWord = inputWords[inputWords.length - 1];
  
  if (clean.startsWith(originalInput)) {
    clean = clean.substring(originalInput.length).trim();
  }
  
  // If suggestion is just the last word repeated, ignore it
  if (clean === lastWord) {
    return '';
  }

  return clean;
}

// Function to parse CLI arguments
export function parseCLI(argv: string[]): Record<string, unknown> {
  const program = new Command();
  
  program
    .name("intellisense")
    .description("A smart terminal IntelliSense tool to simplify your workflow.")
    .version(version)
    .option("--verbose", "Enable verbose output for debugging")
    .option("-d, --debug", "Enable debug mode")
    .option("-s, --shell <type>", "Specify shell type (bash, zsh, powershell)");

  program.parse(argv);
  const options = program.opts();

  // Set logging levels based on flags
  if (options.verbose) logger.enableVerbose();
  if (options.debug) logger.enableDebug();

  return options;
}

// Main execution code
const options = parseCLI(process.argv);

// If no command-line flags are used, start interactive mode
if (process.argv.length <= 2) {
  startInteractiveCLI();
}