const express = require("express");
const app = express();

app.use(express.static(__dirname + '/frontend'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render(__dirname + "/frontend/index.ejs");
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`listening on ${port}`);
