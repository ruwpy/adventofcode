import { expect, test } from "vitest";
import { gearRatiosPartOne } from "./p1.js";

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

test("d3p1", () => {
  expect(gearRatiosPartOne(input)).toBe(4361);
});
