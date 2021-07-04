const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const portfolioRouter = require('./routes/portfolio');

dotenv.config();

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(portfolioRouter);

app.use((req, res, next) => {
  return res.status(404).render('404', {
    currentPage: 'error',
  });
});

app.use((err, req, res, next) => {
  console.log(err);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
