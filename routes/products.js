var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('products');
});

router.get('/add', function(req, res, next) {
    res.send('Add-products');
  });

router.get('/edit', function(req, res, next) {
  res.send('edit-products');
});

router.get('/delete', function(req, res, next) {
  res.send('delete-products');
});


module.exports = router;
