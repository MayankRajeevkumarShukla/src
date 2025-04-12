import { detectShell } from "../../utils/env";
import { logger } from "../../utils/logger";
import { initializeBashIntegration } from "./bash";
import { initializeZshIntegration } from "./zsh";
import { initializePowerShellIntegration } from "./powershell";

export function initializeShellEnvironment(){
    const shell = detectShell();
     switch(shell){
        case "bash":
      initializeBashIntegration();
      break;
    case "zsh":
      initializeZshIntegration();
      break;
    case "powershell":
      initializePowerShellIntegration();
      break;
    default:
      console.warn("Unknown shell, no specific integration loaded.");
      break;
     }
}
