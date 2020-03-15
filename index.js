const express = require('express')
const app = express()
const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Zac'})
})

app.get('/login', (req, res) => {
  res.render('login.ejs')
})

app.get('/register', (req, res) => {
  res.render('register.ejs')
})

app.post('/register', (req, res) => {
  req.body
})
app.post('/login', (req, res) => {})


const PORT =5555
app.listen(PORT, () => console.log(`App is running on port ${PORT}`))