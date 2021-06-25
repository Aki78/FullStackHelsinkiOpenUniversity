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
  {
    _id: "5a422aa71b54a676234d17f9",
    title: "BBB",
    author: "AAA",
    url: "CCCCCCC",
    likes: 7,
    __v: 0,
  },
  {
    _id: "2a422aa71b54a676234d17f0",
    title: "XXX",
    author: "AAA",
    url: "CCC",
    likes: 6,
    __v: 0,
  },
];

const _ = require("lodash");

const group = _.groupBy(listWithOneBlog, "author");

const totals = _.map(group, x=> x.reduce( (a,b) => b.likes + a, 0))
const authors = _.map(group, x=> x[0].author)
const indexOfMaxValue = totals.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

console.log(authors)

console.log(_.zip(authors, totals))

//const result = _.map(_.keys(group), (e) =>
//_.reduce(group[e], (r, o) => (r.count += o.likes), {
//author: e,
//count: 0,
//sum: group[e].length,
//})
//);

//console.log("results>: ", result);
