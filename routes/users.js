var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/signup',(req,res, next) =>{
});

router.post('/signup',(req,res, next) =>{
  res.send('hola soy el pos)')
});

router.get('/signin',(req,res, next) =>{
});

router.post('/signin',(req,res, next) =>{
  res.send('hola soy el pos)')
});
module.exports = router;
