const express = require("express")
const app = express()
const PORT = require("./utils/port")
const wordRouter = require("./routes/wordguess.route")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.raw())

//implement routes
app.use("/api", wordRouter)

app.listen(3000, () => console.log(`port ${PORT} has been opened`))