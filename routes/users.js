var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/signup',(req,res, next) =>{
  res.render('users/signup')
});

router.post('/signup',(req,res, next) =>{
  res.send('hola soy el post');
  console.log(req.body)
});

router.get('/signin',(req,res, next) =>{
});

router.post('/signin',(req,res, next) =>{
  res.send('hola soy el post sign in')
});
module.exports = router;
