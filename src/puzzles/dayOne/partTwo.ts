import { trebuchetPartOne } from "./partOne.js";

export const trebuchetPartTwo = (input: string[]) => {
  const replacedNumbers = input.map((str) => {
    return str
      .replaceAll("one", "o1e")
      .replaceAll("two", "t2o")
      .replaceAll("three", "t3e")
      .replaceAll("four", "f4r")
      .replaceAll("five", "f5e")
      .replaceAll("six", "s6x")
      .replaceAll("seven", "s7n")
      .replaceAll("eight", "e8t")
      .replaceAll("nine", "n9e");
  });

  const result = trebuchetPartOne(replacedNumbers);

  return result;
};
