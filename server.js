//imports
const { json } = require('express');
var express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.json())//kullanıcıdan gelen verileri jsona çevir. Bu bir middleware.
// use res.render to load up an ejs view file

// index page
app.get('/', (req, res) => {
  let data = require("./data");
  let tagline = "Ders Programı"
  console.log(data)

  res.render('pages/index',{
    data1 : data,
    tagline : tagline
  });
});

// dersler page
app.get('/dersler', (req, res) => {
  let data = require("./data");
  let tagline = "Ders Programı"
  console.log(data)
  res.render('pages/dersler', {
    data1 : data,
    tagline : tagline
  });
});

app.get('/dersler2', (req, res) => {
  let data = require("./data");
  let tagline = "Ders Programı"
  console.log(data)
  res.render('pages/dersler2', {
    data1 : data,
    tagline : tagline
  });
});


app.listen(8080);
console.log('Server is listening on "http://localhost:8080" port 8080');