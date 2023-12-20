import {
  cubeConundurumPartOne,
  cubeConundurumPartTwo,
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
    partTwo: cubeConundurumPartTwo,
  },
};

export const inputs: { [key in TPuzzleDays]?: string } = {
  dayOne: "src/puzzles/dayOne/input.txt",
  dayTwo: "src/puzzles/dayTwo/input.txt",
};
