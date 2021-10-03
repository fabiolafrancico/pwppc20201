var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , author: 'Fabiola Francisco'});
});
 
router.get('/greeting', function(req, res, next) {
  res.status(200).json({Message: 'Hola Campeon de la fulstak'})
})
module.exports = router;
