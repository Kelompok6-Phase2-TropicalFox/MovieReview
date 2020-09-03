const express = require('express')
const routes = require('./routes/index')

const app = express()
const port = 3000

app.use(express.urlencoded({extended:false}))


app.use('/',routes)


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Movie Review app listening at http://localhost:${port}`)
})