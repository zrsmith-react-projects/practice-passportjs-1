if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

const initializePassport = require('./passport-config.js')
initializePassport(passport, 
  email => users.find(user => user.email === email)
)
const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(flash())
app.use(session({ 
  secert: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Zac'})
})

app.get('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', (req, res) => {
  res.render('register.ejs')
})

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword

    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
  console.log(users)
})
app.post('/login', async (req, res) => {

})


const PORT =5555
app.listen(PORT, () => console.log(`App is running on port ${PORT}`))