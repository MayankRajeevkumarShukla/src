import { program } from "commander";
import { version } from "../package.json";
import readline from "readline";
import { getAutoComplete } from "../modules/autocomplete/index";
import { logger } from "../utils/logger";

// Function to handle interactive mode
function startInteractiveCLI() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> ",
  });

  rl.prompt();

  rl.on("line", async (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Exiting Terminal IntelliSense...");
      rl.close();
      return;
    }

    console.log(`You typed: ${input}`);

    // Get AI-powered autocomplete suggestion
    const suggestion = await getAutoComplete(input);
    if (suggestion) {
      console.log(`💡 Suggested Completion: ${suggestion}`);
    }

    rl.prompt();
  });

  rl.on("close", () => {
    console.log("Goodbye!");
    process.exit(0);
  });
}

// Function to parse CLI arguments
export function parseCLI(argv: string[]): Record<string, unknown> {
  program
    .name("intellisense")
    .description("A smart terminal IntelliSense tool to simplify your workflow.")
    .version(version)
    .option("-v, --verbose", "Enable verbose output for debugging")
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

// sIf no command-line flags are used, start interactive mode
if (process.argv.length <= 2) {
  startInteractiveCLI();
}
