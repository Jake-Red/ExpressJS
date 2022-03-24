const express = require('express')
const path = require('path')
let app = express()
const fs = require('fs')


app.use((req, res, next) => {
    console.log(req.originalUrl)
    next()
})

//app.get ('/', (req, res, next) => {
//    res.send('Hello from the server side...')
//    next()
//})


app.use(express.static(path.join(__dirname, '../public')))


app.get('/order/:name', (req, res) => {
    let name = req.params.name
    let email = req.query.email
    res.send(`Your name is ${name} and your email is ${email}`)
})

app.listen(3000)

