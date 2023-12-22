import * as fs from "fs";

export const parseInput = async (input: string): Promise<string[]> => {
  return new Promise<string[]>((res, rej) => {
    fs.readFile(input, "utf8", (err, file) => {
      if (err) {
        rej(err);
      }

      const data = file.split("\r\n");

      res(data);
    });
  });
};
