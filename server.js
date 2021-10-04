const express = require('express')
const app = express()
const db = require('./configs/database')

// Require Routes
const golferRoutes = require('./routes/golfer-routes')

// App Config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// DB Test
db.authenticate()
  .then(() => console.log('connected'))
  .catch((err) => console.log('error!'))


// Routes
app.use('/golfers', golferRoutes)

const port = 1337
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})