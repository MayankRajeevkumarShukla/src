#!/usr/bin/env node
import { parseCLI } from "./cli";
import { initializeShell } from "./shell";
import { logger } from "../utils/logger";
const main = async () => {
  try {
    logger.info("Starting Terminal IntelliSense...");
    const args = parseCLI(process.argv);
    const shell = await initializeShell();
    logger.info(`Detected shell: ${shell}`);
    logger.info("Features loading...");
    console.log("Welcome to Terminal IntelliSense!");
    console.log(`Args: ${JSON.stringify(args)}`);
  } catch (error) {
    logger.error("An error occurred", error);
    process.exit(1);
  }
};
