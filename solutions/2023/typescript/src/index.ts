import inquirer from "inquirer";
import { parseInput } from "./lib/utils.js";
import { puzzles } from "./data.js";

const main = async () => {
  const namesArray: string[] = [];

  for (const puzzle in puzzles) {
    const day = puzzle as TPuzzleDays;

    const object = puzzles[day];
    if (object) {
      const name = object.name;

      namesArray.push(name);
    }
  }

  const selectedDay: { [key: string]: TPuzzleDays } = await inquirer.prompt({
    type: "list",
    name: "puzzleDay",
    message: "Choose day:",
    choices: [...namesArray],
  });

  if (selectedDay) {
    const dayValue = Object.values(selectedDay)[0] as string;

    let key: TPuzzleDays;

    for (key in puzzles) {
      if (puzzles.hasOwnProperty(key) && puzzles[key]?.name === dayValue) {
        const puzzleParts = puzzles[key]?.solutions;

        if (puzzleParts) {
          const selectedPart: { [key: string]: TPuzzlesPartNames } =
            await inquirer.prompt({
              type: "list",
              name: "puzzlePart",
              message: "Choose puzzle part:",
              choices: [...Object.keys(puzzleParts)],
            });

          const partValue = Object.values(selectedPart)[0];

          const puzzleFunc = puzzleParts[partValue];

          if (puzzleFunc) {
            const input = await parseInput(`src/inputs/${key}.txt`);

            const result = await puzzleFunc(input);

            console.log(" ");
            console.log(`Result of this puzzle: ${result}`);
            console.log(" ");

            main();
          }
        }
      }
    }
  }
};

main();
