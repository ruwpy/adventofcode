import inquirer from "inquirer";
import { parseInput } from "./lib/utils.js";
import { puzzles } from "./data.js";

const main = async () => {
  const selectedDay: { [key: string]: TPuzzleDays } = await inquirer.prompt({
    type: "list",
    name: "puzzleDay",
    message: "Choose day:",
    choices: [...Object.keys(puzzles)],
  });

  if (selectedDay) {
    const dayValue = Object.values(selectedDay)[0] as TPuzzleDays;

    const puzzleParts = puzzles[dayValue];

    if (puzzleParts) {
      const selectedPart: { [key: string]: TPuzzlesPartNames } = await inquirer.prompt({
        type: "list",
        name: "puzzlePart",
        message: "Choose puzzle part:",
        choices: [...Object.keys(puzzleParts)],
      });

      const partValue = Object.values(selectedPart)[0];

      const puzzleFunc = puzzleParts[partValue];

      if (puzzleFunc) {
        const input = await parseInput(`src/inputs/${dayValue}.txt`);

        const result = await puzzleFunc(input);

        console.log(" ");
        console.log(`Result of this puzzle: ${result}`);
        console.log(" ");

        main();
      }
    }
  }
};

main();
