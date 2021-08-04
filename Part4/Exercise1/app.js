const config = require("./utils/config");
const blogRouter = require("./controllers/blogs");
const userRouter = require("./controllers/users");
const express = require("express");
const app = express();
const cors = require("cors");
const middleware = require("./utils/middleware");
const tokenExtractor = require("./middleware/tokenExtractor");
const logger = require("./utils/logger");
const mongoose = require("mongoose");
const loginRouter = require("./controllers/login");

logger.info("connecting to", config.MONGODB_URI);

const mongoUrl =
  process.env.NODE_ENV === "test" ? config.MONGODB_URI : config.MONGODB_URI;
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
console.log("SECRET", process.env.SECRET);
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use(tokenExtractor);

const PORT = config.PORT;
//if (process.env.NODE_ENV === "test") {
//console.log("test");
//} else
const server = app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});

//const server = server

module.exports = app;
