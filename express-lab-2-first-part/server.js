const express = require("express")
const app = express();

let magicBall = ["It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"]

app.get("/greeting", (req, res) => {
    res.send("Hello, stranger")
})

app.get("/greeting/:name", (req, res) => {
    res.send(`Wow! Hello there, ${req.params.name}`)
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
    let t = parseInt(req.params.total)
    let tp = parseInt(req.params.tipPercentage)
    res.send(`${(t * (tp / 100))}`)
})

app.get("/magic/:question", (req, res) => {
    let randomNumber = Math.floor(Math.random() * magicBall.length);
    res.send(`${req.params.question} - ${magicBall[randomNumber]}`)
})

app.get("/fibonacci/:num", (req, res) => {
    let n = parseInt(req.params.num)
    function isPerfectSquare(x) {
        let s = parseInt(Math.sqrt(x));
        return (s * s == x);
    }

    // Returns true if n is a Fibonacci Number, else false
    function isFibonacci(n) {

        // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
        // is a perfect square
        return isPerfectSquare(5 * n * n + 4) ||
            isPerfectSquare(5 * n * n - 4);
    }

    isFibonacci(n) ? res.send(`${n} - Very good. It is Fibonacci.`) : res.send(`${n} - I can tell this is not a fibonacci number.`)

})

app.listen("3000", () => {
    console.log("You are listening to PORT:3000")
})