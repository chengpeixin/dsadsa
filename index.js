var koa = require('koa');
var app = new koa();
const serve = require("koa-static");

const port = 8008;
app
  .use(serve(__dirname + "/", {
    extensions: ['html']
  }));
app.listen(port);