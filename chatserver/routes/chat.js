var express = require('express');
var router = express.Router();
var messages=[
  {
    "userId": 1,
    "id": 1,
    "title": "Youssef",
    "body": "Salut les amis :D"
  },
  {
    "userId": 2,
    "id": 2,
    "title": "Abdelghani",
    "body": "salut youssef cv"
  },
  {
    "userId": 3,
    "id": 17,
    "title": "Ismail",
    "body": "Yoo les amis cv"
  },
  {
    "userId": 4,
    "id": 18,
    "title": "Ghada",
    "body": "CooooL"
  }
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/messages', function(req, res, next) {
  res.set('Access-Control-Allow-Origin' ,'*' );
  res.json(messages);
});

module.exports = router;
