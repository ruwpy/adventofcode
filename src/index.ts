import inquirer from "inquirer";
import { dayOnePartOne } from "./puzzles/dayOne/partOne.js";

const main = async () => {
  const puzzles: TPuzzles = {
    dayOne: {
      partOne: dayOnePartOne,
      partTwo: () => {},
    },
  };

  const selectedDay: { [key: string]: TPuzzleDays } = await inquirer.prompt({
    type: "list",
    name: "puzzleDay",
    message: "Choose day:",
    choices: [...Object.keys(puzzles)],
  });

  if (selectedDay) {
    const dayValue = Object.values(selectedDay)[0];

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

      if (puzzleFunc) await puzzleFunc();
    }
  }
};

main();
