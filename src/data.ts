import {
  cubeConundurumPartOne,
  trebuchetPartOne,
  trebuchetPartTwo,
} from "./puzzles/index.js";

export const puzzles: TPuzzles = {
  dayOne: {
    partOne: trebuchetPartOne,
    partTwo: trebuchetPartTwo,
  },
  dayTwo: {
    partOne: cubeConundurumPartOne,
  },
};

export const inputs: { [key in TPuzzleDays]?: string } = {
  dayOne: "src/puzzles/dayOne/input.txt",
  dayTwo: "src/puzzles/dayTwo/input.txt",
};
