const express = require("express")
const app = express()



app.get("/", (req, res) => {
    res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">Take one down, pass it around</a>`)
})

app.get("/:num", (req, res) => {
    let number = parseInt(req.params.num)
    if (number === 0) {
        res.send(`
            <h1>${number} Bottles of beer on the wall</h1>
            <a href="/">Start Over</a>`)
    } else {
        res.send(`
            <h1>${number} Bottles of beer on the wall</h1>
            <a href="/${number - 1}">Take one down, pass it around</a>`)
    }

})




app.listen("3000", () => {
    console.log("You are listening to PORT:3000")
})