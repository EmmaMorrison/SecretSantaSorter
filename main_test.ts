import { assertNotEquals } from "@std/assert";
import { expect } from "@std/expect";

import { shuffle } from "./main.ts";
import { parseList } from "./parse-list.ts";


Deno.test("The plain text list of names is converted to an array", async () => {
  const testArray = await parseList('test-list.txt');

  expect(testArray).toBeInstanceOf(Array);
});

Deno.test("The shuffle function successfully shuffles array", () => {
  const testArray = ["Tina", "Dave", "Harriet", "Brian", "Max", "Sam"];

  assertNotEquals(testArray[0], shuffle(testArray)[0], `The shuffle function was not successful`);
});

