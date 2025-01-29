import {program} from "commander"
import { version } from "../package.json";
export function parseCLI(argv: string[]) :Record<string,unknown>{
    program
     .name("intellisense")
     .description("A smart terminal IntelliSense tool to simplify your workflow.")
     .version(version)
    program
     .option("-v, --verbose", "Enable verbose output for debugging") 
     .option("-d, --debug", "Enable debug mode") 
     .option("-s, --shell <type>", "Specify shell type (bash, zsh, powershell)") 
     program.parse(argv)
     return program.opts()
}