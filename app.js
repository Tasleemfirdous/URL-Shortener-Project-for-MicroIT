const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const dotenv = require('dotenv');
const path = require('path');
const Url = require('./models/Url');

dotenv.config();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(' MongoDB connected'))
.catch((err) => console.log(' MongoDB error:', err));

// Routes
app.get('/', async (req, res) => {
  const urls = await Url.find().sort({ createdAt: -1 });
  res.render('index', { urls });
});

app.post('/shorten', async (req, res) => {
  const longUrl = req.body.longUrl;
  const shortCode = shortid.generate();

  const existing = await Url.findOne({ longUrl });
  if (existing) {
    return res.redirect(`/result/${existing.shortCode}`);
  }

  const shortUrl = `${process.env.BASE_URL}/${shortCode}`;
  const newUrl = new Url({
    longUrl,
    shortCode,
    shortUrl
  });
  await newUrl.save();
  res.redirect(`/result/${shortCode}`);
});

app.get('/result/:code', async (req, res) => {
  const url = await Url.findOne({ shortCode: req.params.code });
  if (!url) return res.status(404).render('404');
  res.render('result', { url });
});

app.get('/:code', async (req, res) => {
  const url = await Url.findOne({ shortCode: req.params.code });
  if (url) {
    url.clicks += 1;
    await url.save();
    return res.redirect(url.longUrl);
  } else {
    res.status(404).render('404');
  }
});

// 404 Page
app.use((req, res) => {
  res.status(404).render('404');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
