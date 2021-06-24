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

const mostAuthor = (listOfBlogs) => {
  console.log("TESTES");
  _.head(
    _(listOfBlogs)
      .countBy((x) => x.author)
      .entries()
      .maxBy(_.last)
  );
  return _.head(
    _(listOfBlogs)
      .countBy((x) => x.author)
      .entries()
      .maxBy(_.last)
  );
};
module.exports = { totalLikes, favoriteBlog, mostAuthor };
