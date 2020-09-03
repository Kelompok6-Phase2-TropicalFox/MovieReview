require ("dotenv").config ()

const express = require('express')
const routes = require('./routes/index')
console.log(process.env.CLIENT_ID);
const app = express()
const port = 3100

app.use(express.urlencoded({extended:false}))
app.use (express.json ())

app.use('/',routes)


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Movie Review app listening at http://localhost:${port}`)
})