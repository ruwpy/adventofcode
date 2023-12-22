import { expect, test } from "vitest";
import { trebuchetPartOne } from "./p1.js";

const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

test("d1p1", async () => {
  expect(await trebuchetPartOne(input)).toBe(142);
});
