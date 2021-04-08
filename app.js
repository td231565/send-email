const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const emailService = require('./libs/email.js')

const corsOptions = {
  origin: ['https://td231565.github.io']
}
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/mailto', (req, res) => {
  const {to, name, photo} = req.query
  res.status(200).send(`will send mail to ${to}`)
  emailService(to, name, photo)
})