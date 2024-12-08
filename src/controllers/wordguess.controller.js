const FormData = require("form-data")
const serviceUrl = require("../utils/serviceUrl")
const axios = require("axios")
const { Ok, BadRequest, InvalidValidate } = require("../utils/models/responseModel")

const wordseg = async (req, res) => {    
    try {
        const response = await axios.post(`${serviceUrl}/wordseg`, {
            text: req.body.text
        }, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        const data = response.data
        return res.status(200).json(Ok(data))
    } catch (error) {
        console.trace(error)
        res.status(500).json(BadRequest())
    }
}

const guessRandom = async (req, res) => {
    try {
        const { guess, size, seed } = req.query
        if (!guess || !size || !seed) {
            return res.status(422).json(InvalidValidate())
        }
        const response = await axios.get(`${serviceUrl}/random?guess=${guess}&size=${size}&${seed}`)
        const data = response.data
        return res.status(200).json(Ok(data))
    } catch (error) {
        console.trace(error)
        res.status(500).json(BadRequest())
    }
}

const guessWord = async (req, res) => {
    try {
        const { guess } = req.query
        const { word } = req.params
        if (!guess || !word) {
            return res.status(422).json(InvalidValidate())
        }
        const response = await axios.get(`${serviceUrl}/word/${word}?guess=${guess}`)
        const data = response.data
        return res.status(200).json(Ok(data))
    } catch (error) {
        console.trace(error)
        res.status(500).json(BadRequest())
    }
}

const guessDaily = async (req, res) => {
    try {
        const { guess, size, seed } = req.query
        if (!guess || !size) {
            return res.status(422).json(InvalidValidate())
        }
        const response = await axios.get(`${serviceUrl}/daily?guess=${guess}&size=${size}`)
        const data = response.data
        return res.status(200).json(Ok(data))
    } catch (error) {
        console.log(error)
        res.status(500).json(BadRequest())
    }
}

module.exports = {
    wordseg,
    guessRandom,
    guessWord,
    guessDaily
}