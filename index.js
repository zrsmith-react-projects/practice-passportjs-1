const express = require('express')
const app = express()

app.set('view-engine', 'ejs')

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

})
app.post('/login', (req, res) => {})


const PORT =5555
app.listen(PORT, () => console.log(`App is running on port ${PORT}`))