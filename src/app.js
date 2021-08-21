const express = require('express')
require('./db/mongoose')()

const routerUrl = require('./routers/routerUrl')

const app = express()
const port = process.env.PORT || 5000

app.set('views', './src/views/pages')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use('/', routerUrl)

// app.get('/', (req, res) => {
//   res.render('index', { title: 'wews' })
// })

app.listen(port, () => console.log(`Server is up at port ${port}`))
