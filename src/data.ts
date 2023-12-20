import {
  cubeConundurumPartOne,
  cubeConundurumPartTwo,
  gearRatiosPartOne,
  gearRatiosPartTwo,
  trebuchetPartOne,
  trebuchetPartTwo,
} from "./puzzles/index.js";

export const puzzles: TPuzzles = {
  "01": {
    name: "Day 1: Trebuchet",
    solutions: {
      p1: trebuchetPartOne,
      p2: trebuchetPartTwo,
    },
  },
  "02": {
    name: "Day 2: Cube Conundurum",
    solutions: {
      p1: cubeConundurumPartOne,
      p2: cubeConundurumPartTwo,
    },
  },
  "03": {
    name: "Day 3: Gear Ratios",
    solutions: {
      p1: gearRatiosPartOne,
      p2: gearRatiosPartTwo,
    },
  },
};
