const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const RSSParser = require('rss-parser');

const parser = new RSSParser();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'ejs');
//app.set('views', './views');
app.use(express.static('public'));

// Test the RSS feed
(async () => {
  let feed = await parser.parseURL('https://thefactfile.org/feed/');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ': ' + item.link);
  });
})();

app.get('/', async (req, res) => {
    const feed = await parser.parseURL('https://thefactfile.org/feed/');
    res.render('pages/index', { posts: feed.items });
  });
 
  app.get('/search', (req, res) => {
    res.render('pages/search', { posts: [] });
  });

  app.post('/search/category', async (req, res) => {
    const { category } = req.body;
    const feed = await parser.parseURL('https://thefactfile.org/feed/');
    const filteredPosts = feed.items.filter(item => item.categories && item.categories.includes(category));
    res.render('pages/search', { posts: filteredPosts });
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  