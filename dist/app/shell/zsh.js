import { logger } from "../../utils/logger";
export function initializeZshIntegration() {
    logger.verboseLog("Initializing Zsh shell integration...");
    logger.info("Welcome to Zsh! Let's start using terminal IntelliSense.");
    logger.verboseLog("Zsh autocomplete: Listing available commands...");
    console.log("Available commands: ls, cd, echo, mkdir, rm");
}
//# sourceMappingURL=zsh.js.map