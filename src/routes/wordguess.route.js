const express = require("express")
const { wordseg, guessRandom, guessWord, guessDaily } = require("../controllers/wordguess.controller")
const router = express.Router()

router.post("/wordseg", wordseg)
router.get("/random", guessRandom)
router.get("/word/:word", guessWord)
router.get("/daily", guessDaily)

module.exports = router