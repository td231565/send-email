const express = require('express')
const app = express()
const port = 3000
const emailService = require('./email.js')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/mailto', (req, res) => {
  console.log(req.query)
  const {to} = req.query
  res.send(`will send mail to ${to}`)
  emailService(to)
})