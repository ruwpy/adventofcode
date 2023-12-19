import { expect, test } from "vitest";
import { dayOnePartOne } from "./partOne.js";

const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

test("d1p1 test", async () => {
  expect(await dayOnePartOne(input)).toBe(142);
});
