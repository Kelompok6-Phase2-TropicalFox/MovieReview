require ("dotenv").config ()

const express = require('express')
const routes = require('./routes/index')
const cors = require(`cors`)
const app = express()
const port = 5000

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use (express.json ())

app.use('/',routes)


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Movie Review app listening at http://localhost:${port}`)
})