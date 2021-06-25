const app = require("./app"); // 
const http = require("http");
const supertest = require('supertest')
const config = require("./utils/config");
const logger = reqire('./utils/logger')
const api = supertest(api)

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
