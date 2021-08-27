require('dotenv').config;
var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var router = express.Router();

const {TOKEN, SERVER_URL} = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const URI = `/webhook/${TOKEN}`;
const WEBHOOK_URL = SERVER_URL+URI;

const init = async () => {
    const res = await axios.get(`${TELEGRAMA_PI}/setWebhook?url=${WEBHOOK_URL}`);
    console.log(res.data);
}



/* GET home page. */
router.get(URI, async (req, res, next) => {
    await init();

    console.log(req.body);
    return res.send();


});

module.exports = router;
