const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
	res.status(200).json({ msg: 'pong', date: new Date()});
});//localhost:3500/ping


module.exports = router;