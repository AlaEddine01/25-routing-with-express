const express = require("express");
const app = express();

app.use(
  (date = (req, res, next) => {
    let d = Date.now();
    let time = d.toString().slice(16, 24);
    if (time.slice(0, 2) < 8 || time.slice(0, 2) >= 17)
      res.sendFile(`${__dirname}/pages/notOpen.html`);
    else next();
  })
);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/pages/home.html`)
})

app.get('/:page', (req, res) => {
    res.sendFile(`${__dirname}/pages/${req.params.page}.html`)
})


app.listen(3000, (err) => {
  if (err) {
    console.log("server is not running");
  } else {
    console.log("server is running");
  }
});
