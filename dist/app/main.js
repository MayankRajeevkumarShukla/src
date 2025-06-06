import { parseCLI } from "./cli";
import { logger } from "../utils/logger";
import { detectShell } from "../utils/env";
async function main() {
    try {
        const args = parseCLI(process.argv);
        logger.init({
            verbose: args.verbose,
            debug: args.debug,
        });
        logger.info("Starting Terminal IntelliSense...");
        // Detect shell
        const shell = detectShell();
        logger.info(`Running on shell: ${shell}`);
        console.log("Welcome to Terminal IntelliSense!");
    }
    catch (error) {
        logger.error("An error occurred:", error);
        process.exit(1);
    }
}
main();
//# sourceMappingURL=main.js.map