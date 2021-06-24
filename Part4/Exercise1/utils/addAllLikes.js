const totalLikes = (listOfBlogs) => {
  return listOfBlogs.reduce((a, b) => a + b.likes, 0);
};

const favoriteBlog = (listOfBlogs) => {
  const aValue = listOfBlogs.reduce((a, b) => {
    console.log("Log?", a.likes);
    if (b.likes > a) return b.likes;
  }, 0);
  console.log(
    "stest: ",
    listOfBlogs.find(({ likes }) => likes == aValue)
  );
  const favBook = listOfBlogs.find(({ likes }) => likes == aValue);
  return { title: favBook.title, author: favBook.author, likes: favBook.likes };
};

module.exports = { totalLikes, favoriteBlog };
