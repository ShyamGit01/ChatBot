var express = require('express');
var router = express.Router();
const data = require('../db/chatbot.json');



/* GET users listing. */
router.post('/', function(req, res, next) {

  var reqObj = req.body.userQuery;

  for (const chatintenceSet of data.chatData) {
    for (const instanceSet of chatintenceSet.question) {
      // console.log("question set==>", instanceSet);
      if (reqObj == instanceSet){
        console.log("intence set==>", chatintenceSet.response)
      }
    }
  }

  res.status(200).json("success");
});

module.exports = router;
