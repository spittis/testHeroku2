var express = require('express');
var router = express.Router();

const data = require(`../data`);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('data:', data);
  console.log('user', rep.params.user);
  res.render('userpage', data[req.params.user]); //what we want to render
});

module.exports = router;
