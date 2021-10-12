const requestIp = require("request-ip");

module.exports = function (app) {
  app.use(requestIp.mw());
  app.get("/", function (req, res) {       
    // 서버의 로그 기록
    console.log("방문자 IP:"+req.clientIp);    
    res.render("hello.html");
  });

  app.get("/myself", function (req, res) {
    res.render("myself.html");
  });
};