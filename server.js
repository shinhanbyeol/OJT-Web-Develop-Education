const express = require("express");
let app = express();
const router = require("./router/router")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

const server = app.listen(3000, function () {
  console.log("서버가 구동 되었습니다.");
});