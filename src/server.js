process.on("uncaughtException", function (e) {
  logger.error({ message: e.stack });
  process.exit(99);
});
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const http = require("http");
const logger = require("./util/Logstash");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express());
app.use(bodyParser.json());

//Log all requests in development mode
if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    logger.debug({ message: "Log request", req });
    next();
  });
}

app.get("/test", (req, res) => {
  res.send("<h1>I'm sent from the NodeJs server.</h1>");
});

/**
 * TODO
 * Route all calls with proxy (if necessary)
 * Also good place to cover all endpoints with oAuth2
 */

app.get("/api/*");
app.post("/api/*");
app.put("/api/*");
app.delete("/api/*");

// Serve static (React) resources from build folder
app.use("/", [
  express.static(path.join(__dirname, "build"), {
    setHeaders: (res, path) => {
      if (!path.endsWith(".html")) {
        res.setHeader("Cache-Control", "public, max-age=604800, immutable");
      }
    },
  }),
]);

const root = require("path").join(__dirname, "..", "build");
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

const server = app.listen(process.env.BACKEND_PORT || 8080, () => {
  const host =
    server.address().address !== "::" ? server.address().address : "localhost";
  const port = server.address().port;
  logger.info({
    message: `Express server started at: http://${host}:${port}/`,
  });
});

module.exports = { app, server };
