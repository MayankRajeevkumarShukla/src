import { logger } from "../../utils/logger";
export function initializePowerShellIntegration() {
    logger.verboseLog("Initializing PowerShell shell integration...");
    logger.info("Welcome to PowerShell! Let's start using terminal IntelliSense.");
    logger.verboseLog("PowerShell autocomplete: Listing available commands...");
    console.log("Available commands: Get-Help, Set-ExecutionPolicy, Get-Command");
}
//# sourceMappingURL=powershell.js.map