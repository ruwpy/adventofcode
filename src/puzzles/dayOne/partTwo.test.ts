import { expect, test } from "vitest";
import { trebuchetPartTwo } from "./index.js";

const input = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

test("d1p2", async () => {
  expect(await trebuchetPartTwo(input)).toBe(281);
});
