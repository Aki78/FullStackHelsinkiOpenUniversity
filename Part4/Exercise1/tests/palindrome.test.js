const palindrome = require("../utils/for_testing").palindrome;
const average = require("../utils/for_testing").average;
const listHelper = require("../utils/list_helper");

test("palindrome of a", () => {
  const result = palindrome("a");

  expect(result).toBe("a");
});

test("palindrome of react", () => {
  const result = palindrome("react");

  expect(result).toBe("tcaer");
});

test("palindrome of releveler", () => {
  const result = palindrome("releveler");

  expect(result).toBe("releveler");
});

describe("average", () => {
  test("of one value is the value itself", () => {
    expect(average([1])).toBe(1);
  });
  test("of many is calculated right", () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });
  test("of empty array is zero", () => {
    expect(average([])).toBe(0);
  });
});

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});
