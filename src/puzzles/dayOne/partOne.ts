import { parseInput } from "../../lib/utils.js";

export const dayOnePartOne = async () => {
  const data = await parseInput("src/puzzles/dayOne/input.txt");

  const nums = data.map((str) => {
    let allNums = [];

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (!isNaN(Number(char))) {
        allNums.push(char);
      }
    }

    return Number(`${allNums[0]}${allNums[allNums.length - 1]}`);
  });

  const sum = nums.reduce((prev, cur) => prev + cur);

  console.log(sum);

  return sum;
};
