var koa = require('koa');
var app = new koa();
const serve = require("koa-static");

const port = 8001;
app
  .use(serve(__dirname + "/", {
    extensions: ['html']
  }));
app.listen(port);