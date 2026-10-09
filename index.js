// import { add } from "./math.js";

// console.log(add(2, 3));

import { greet } from "./commands/greet.js";
import { showAbout } from "./commands/about.js";
import { showHelp } from "./commands/help.js";

const command = process.argv[2];
const argument = process.argv[3];

if (command === "greet") {
    greet(argument);
} else if (command === "about") {
    showAbout();
} else if (command === "help" || command === undefined) {
    showHelp();
} else {
    console.error(`Unknown command: ${command}`);
    process.exitCode = 1;
}