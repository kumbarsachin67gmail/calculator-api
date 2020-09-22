const express = require("express");
const router = express.Router();
const { addNum,subNum,mulNum,divNum } = require("./controllers");
const {typeCheck} = require('./checkMiddleware/checkMiddleware')

router.post("/add", typeCheck,addNum);
router.post("/sub",typeCheck, subNum);
router.post("/mul",typeCheck, mulNum);
router.post("/div",typeCheck, divNum);

module.exports = router;