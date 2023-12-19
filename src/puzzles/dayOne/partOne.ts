export const dayOnePartOne = async (input: string[]) => {
  const nums = input.map((str) => {
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

  return sum;
};
