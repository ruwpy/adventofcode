import { expect, test } from "vitest";
import { gearRatiosPartTwo } from "./p2.js";

const input = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];

test("d3p2", () => {
  expect(gearRatiosPartTwo(input)).toBe(467835);
});
