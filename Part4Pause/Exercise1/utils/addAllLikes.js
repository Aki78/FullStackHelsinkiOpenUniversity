const _ = require("lodash");

const totalLikes = (listOfBlogs) => {
  return listOfBlogs.reduce((a, b) => a + b.likes, 0);
};

const favoriteBlog = (listOfBlogs) => {
  const aValue = listOfBlogs.reduce((a, b) => {
    console.log("a?", a);
    console.log("Log?", a.likes);
    if (b.likes >= a) return b.likes;
    else return a;
  }, 0);
  console.log(
    "stest: ",
    listOfBlogs.find(({ likes }) => likes == aValue)
  );
  const favBook = listOfBlogs.find(({ likes }) => likes == aValue);
  return { title: favBook.title, author: favBook.author, likes: favBook.likes };
};

const mostLikedAuthor = (listOfBlogs) => {
  const group = _.groupBy(listOfBlogs, "author");
  const totalLikes = _.map(group, (x) => x.reduce((a, b) => b.likes + a, 0));
  const authors = _.map(group, (x) => x[0].author);
  const indexOfMaxValue = totalLikes.reduce(
    (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
    0
  );
  return {
    author: authors[indexOfMaxValue],
    totalLikes: totalLikes[indexOfMaxValue],
  };
};

const mostAuthor = (listOfBlogs) => {
  const group = _.groupBy(listOfBlogs, "author");
  const authors = _.map(group, (x) => x[0].author);
  const totals = _.map(group, (x) => x.reduce((a, b) => 1 + a, 0));
  const indexOfMaxValue = totals.reduce(
    (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
    0
  );
  return {
    author: authors[indexOfMaxValue],
    totalBooks: totals[indexOfMaxValue],
  };
};

module.exports = { totalLikes, favoriteBlog, mostAuthor, mostLikedAuthor };
