const express = require('express')
const app = express()

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Zac'})
})


const PORT =5555
app.listen(PORT, () => console.log(`App is running on port ${PORT}`))