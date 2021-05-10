const express = require("express");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
let $ = require("jquery");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname + "/public"));

app.get("/api/users", (req, res) => {
  let info = {};

  fetch("https://ru.sefon.pro/top/")
    .then((ans) => ans.text())
    .then((ans) => {
      const $ = cheerio.load(ans);
      const songs = $(".title");

      let randomNumber = Math.floor(Math.random() * songs.length);

      songs.each((id, value) => {
        if (id === randomNumber) {
          info.name = $(value).find(".artist_name a:first-child").text()
          info.song = $(value).find(".song_name a").text()
          res.send(JSON.stringify(info));

          return
        }
      });
    });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
