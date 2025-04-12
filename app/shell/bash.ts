import { logger } from "../../utils/logger";
export function initializeBashIntegration(){
    logger.verboseLog("Initializing Bash shell integration...")
    logger.info("Welcome to Bash! Let's start using terminal IntelliSense.")
    logger.verboseLog("Bash autocomplete: Listing available commands...")
    console.log("Available commands: ls, cd, echo, mkdir, rm");
}