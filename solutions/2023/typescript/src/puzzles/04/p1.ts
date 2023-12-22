export const scratchcardsPartOne = (input: string[]) => {
  let result: number[] = [];

  input.map((str) => {
    const numbers = str.split(":")[1];
    const [winNumbers, scratchedNumbers] = numbers.split("|").map((numbers) =>
      numbers
        .trim()
        .split(" ")
        .filter((n) => n !== "")
    );
    const winningScratchedNumbers: number[] = [];

    let points = 0;

    for (let i = 0; i < winNumbers.length; i++) {
      for (let j = 0; j < scratchedNumbers.length; j++) {
        if (winNumbers[i] === scratchedNumbers[j]) {
          winningScratchedNumbers.push(parseInt(winNumbers[i], 10));

          points = 2 ** winningScratchedNumbers.length / 2;
        }
      }
    }

    return result.push(points);
  });

  return result.reduce((prev, cur) => prev + cur);
};
