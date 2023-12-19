import { expect, test } from "vitest";

const add = (num: number) => {
  return num + 1;
};

test("add", () => {
  expect(add(5)).toBe(6);
});
