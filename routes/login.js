var express = require('express');
var router = express.Router();

/* 获取登录页 */
router.get('/login', function (req,res,next) {
  res.render('login');
});

module.exports = router;
