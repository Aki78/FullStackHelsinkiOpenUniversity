const palindrome = require("../utils/for_testing").palindrome;
const average = require("../utils/for_testing").average;
const listHelper = require("../utils/list_helper");
const addAllLikes = require("../utils/addAllLikes");

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

describe("total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url:
        "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
  ];

  test("when list has only one blog, equals the likes of that", () => {
    console.log("totakl is: ", addAllLikes.totalLikes(listWithOneBlog));
    const result = addAllLikes.totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });
});
