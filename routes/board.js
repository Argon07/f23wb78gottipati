const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  
  res.render('board', { title: 'Board Display', query });
});

module.exports = router;
