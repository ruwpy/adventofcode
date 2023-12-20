import {
  cubeConundurumPartOne,
  cubeConundurumPartTwo,
  gearRatiosPartOne,
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
  dayThree: {
    partOne: gearRatiosPartOne,
  },
};
