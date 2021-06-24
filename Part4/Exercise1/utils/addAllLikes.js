const totalLikes = (listOfBlogs) => {
  console.log(
    "ABVDAFEAWE",
    listOfBlogs.reduce((a, b) => a + b.likes, 0)
  );
  return listOfBlogs.reduce((a, b) => a + b.likes, 0);
};

module.exports = { totalLikes };
