type TPos = { char: string; x: number; y: number };

export const gearRatiosPartOne = (input: string[]) => {
  const adjacentNumbers = [];
  const charsPos: TPos[] = [];
  const numbersPos: TPos[][] = [];

  for (let row = 0; row < input.length; row++) {
    const curRow = input[row];
    const splittedRow = curRow.split("");

    for (let col = 0; col < splittedRow.length; col++) {
      const curChar = splittedRow[col];

      const isNum = isNumber(curChar);

      if (!isNum && curChar !== ".") {
        charsPos.push({ char: curChar, x: col, y: row });
      } else if (isNum) {
        const number: TPos[] = [];
        let numberIndex = col;

        while (isNumber(splittedRow[numberIndex])) {
          const char = splittedRow[numberIndex];

          number.push({ char, x: numberIndex, y: row });

          numberIndex++;
        }

        numbersPos.push(number);
        col += number.length - 1;
      }
    }
  }

  for (let num = 0; num < numbersPos.length; num++) {
    for (let char = 0; char < charsPos.length; char++) {
      const curChar = charsPos[char];
      const curNum = numbersPos[num];

      const isAround = isCharAround(curNum, curChar);

      if (isAround) {
        const number = curNum.map((char) => char.char).join("");
        adjacentNumbers.push(parseInt(number, 10));
      }
    }
  }

  return adjacentNumbers.reduce((prev, cur) => prev + cur);
};

const isNumber = (char: string) => {
  return !isNaN(parseInt(char, 10));
};

const isCharAround = (number: TPos[], char: TPos) => {
  for (let i = 0; i < number.length; i++) {
    const numPos = number[i];

    if (Math.abs(char.x - numPos.x) <= 1 && Math.abs(char.y - numPos.y) <= 1) {
      return true;
    }
  }

  return false;
};
